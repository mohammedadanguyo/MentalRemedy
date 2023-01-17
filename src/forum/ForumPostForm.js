import React, { Component } from 'react';
import { MdComment } from 'react-icons/md';
import { withRouter } from 'react-router-dom';
import { Consumer } from '../context/Context';
import { forumPosts } from '../firebase/firebase';

class ForumPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addPost = async (post) => {
    const forumPostsCollection = await forumPosts;
    await forumPostsCollection.add({ post });
    this.props.getForumPosts();
  }

  handleClick(event, user, dispatch) {
    event.preventDefault();
    if (user.id) {
      const post = {
        userId: user.id,
        post: this.state.post,
        date: Date.now()
      };
      this.addPost(post);
      dispatch({ type: 'TOGGLEPOSTFORM', payload: false });
    } else {
      this.props.history.push('/login');
    }
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ post: event.target.value });
  }

  render() {
    return (
            <Consumer>
                {(value) => {
                  return (
                        <>
                        {value.forumPostForm ? (
                            <form>
                                <div className="post-form mt-1">
                                    <textarea
                                        name="post-textarea"
                                        id="post-textarea"
                                        className="intro-search small-text"
                                        placeholder="Enter your question here..."
                                        onChange={this.handleChange}
                                        ></textarea>
                                    <br/>
                                    <button
                                        className="small-heading large-btn m-0"
                                        onClick={(event) => {
                                          this.handleClick(event, value.user, value.dispatch);
                                        }}
                                        ><MdComment/> Post</button>
                                </div>
                            </form>
                        ) : (<span></span>)}
                        </>
                  );
                }}
            </Consumer>
    );
  }
}

export default withRouter(ForumPostForm);
