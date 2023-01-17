import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { services, mentalDisorders, specialists } from './data';
import startSlider from '../swiper';
import reducer from './Reducers';
import { firebaseAuth, profiles, forumPosts, comments } from '../firebase/firebase';
import defaultImg from './images/male.svg';

export const Context = React.createContext();

// This global variable is used to identify whether component is mounted or unmouted
let isMounted = true;

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // All states are to be created here
      menuOpen: false,
      dropDownOpen: false,
      profiles: [],
      userProfile: {},
      user: {},
      errorMessage: '',
      passwordError: '',
      signUp: this.signUp,
      logOut: this.logOut,
      logIn: this.logIn,
      mentalDisorders: [],
      nameSearch: '',
      titleSearch: '',
      citySearch: '',
      aboutInfo:
        'Due to the Stigma and scrutiny associated with mental illnesses, individuals who notice change in behavioural attitude may desist from seeking professional help cause of this stigma. Our main goal is to educate and establish effective means of communication between specialists and the community.',
      services: [],
      getServices: () => this.getServices(),
      getMdlist: () => this.getMdlist(),
      specialists: [],
      getSpecialists: () => this.getSpecialists(),
      forumPosts: [],
      getForumPosts: this.getForumPosts,
      getProfiles: this.getProfiles,
      forumPostForm: false,
      comments: [],
      commentForm: false,
      getComments: this.getComments,
      startSlider: () => startSlider(),
      dispatch: (action) => this.setState((state) => reducer(state, action))
    };
  }

  async getServices() {
    try {
      this.setState({ services: [] });
      //fetch data from backend
      const ser = await services;
      ser.map((key) => (isMounted ? this.setState({ services: [...this.state.services, key] }) : null));
    } catch (error) {
      console.error(error);
    }
  }

  async getSpecialists() {
    try {
      this.setState({ specialists: [] });
      //fetch data from the backend
      const spec = await specialists;
      spec.map((key) => (isMounted ? this.setState({ specialists: [...this.state.specialists, key] }) : null));
    } catch (error) {
      console.error(error);
    }
  }

  async getMdlist() {
    try {
      this.setState({ mentalDisorders: [] });
      //fetch data from backend
      const mdlist = await mentalDisorders;
      mdlist.map((key) =>
        isMounted ? this.setState({ mentalDisorders: [...this.state.mentalDisorders, key] }) : null
      );
    } catch (error) {
      console.error(error);
    }
  }

  getForumPosts = async () => {
    try {
      this.setState({ forumPosts: [] });
      //fetch data from backend
      const forumPostsCollection = await forumPosts.get();
      forumPostsCollection.forEach((post) => {
        const data = post.data().post;
        const postObj = {
          id: post.id,
          ...data
        };
        this.setState({ forumPosts: [...this.state.forumPosts, postObj] });
      });
    } catch (error) {
      console.error(error);
    }
  }

  getComments = async () => {
    try {
      this.setState({ comments: [] });
      //fetch comments from firestore
      const commentsCollection = await comments.get();
      commentsCollection.forEach((comment) => {
        const data = comment.data().comment;
        const commentObj = {
          id: comment.id,
          ...data
        };
        this.setState({ comments: [...this.state.comments, commentObj] });
      });
    } catch (error) {
      console.error(error);
    }
  }

  getProfiles = async () => {
    try {
      this.setState({ profiles: [] });
      //fetch data from backend
      const profilesCollection = await profiles.get();
      profilesCollection.forEach((profile) => {
        const data = profile.data().profile;
        const profObj = {
          id: profile.id,
          ...data
        };
        this.setState({ profiles: [...this.state.profiles, profObj] });
      });
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
    isMounted = true;
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user: {
            id: user.uid,
            email: user.email
          }
        });
      }
    });
  }

  componentWillUnmount() {
    isMounted = false;
  }

  signUp = async (username, email, password) => {
    try {
      await firebaseAuth.createUserWithEmailAndPassword(email, password);
      const profile = { username: username, user_type: 'user', userId: this.state.user.id, profile_pic: defaultImg };
      const profilesCollection = await profiles;
      await profilesCollection.add({ profile });
      this.setState({ errorMessage: 'Success' });
      setTimeout(() => {
        this.props.history.push('/');
        this.setState({ errorMessage: '' });
      }, 2000);
    } catch (error) {
      this.setState({
        errorMessage: error.message
      });
      setTimeout(() => this.setState({ errorMessage: '' }), 3000);
    }
  }

  logOut = async () => {
    try {
      await firebaseAuth.signOut();
      this.setState({ user: {} });
      this.props.history.push('/login');
    } catch (error) {
      this.setState({
        errorMessage: error.message
      });
      setTimeout(() => this.setState({ errorMessage: '' }), 3000);
    }
  };

  logIn = async (email, password, event) => {
    try {
      event.preventDefault();
      await firebaseAuth.signInWithEmailAndPassword(email, password);
      setTimeout(() => {
        this.props.history.push('/');
        this.setState({ errorMessage: '' });
      }, 1000);
      this.setState({
        errorMessage: 'Success'
      });
    } catch (error) {
      this.setState({
        errorMessage: error.message
      });
      setTimeout(() => this.setState({ errorMessage: '' }), 3000);
    }
  };

  render() {
    return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
  }
}

// Consumer will be used in the components that require access to these states
export const { Consumer } = Context;

// Provider accepts a value prop to be passed to consuming components that are its descendants
export default withRouter(Provider);
