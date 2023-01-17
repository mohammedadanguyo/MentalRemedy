import React, { Component } from 'react';
//import { GoComment } from 'react-icons/go';
import { withRouter } from 'react-router-dom';
import PostOptions from './PostOptions';

class Post extends Component {
  constructor(props) {
    super(props);
    this.goToComments = this.goToComments.bind(this);
  }

  componentDidMount() {
    this.props.getProfiles();
  }

  goToComments(event, forumPost) {
    event.preventDefault();
    let profiler = {};
    this.props.profiles.map((key) => forumPost.userId === key.userId ? profiler = key : null);
    this.props.history.push({
      pathname: `/forum/${forumPost.id}`,
      state: {
        forumPost: forumPost,
        user: this.props.user,
        profile: profiler,
        comments: this.props.comments
      }
    });
  }

  render() {
    let profile = {};
    this.props.profiles.map((key) => (
      key.userId === this.props.forumPost.userId ? profile = key : null
    ));
    return (
        <>
        <div className="post cursor" onClick={(event) => this.goToComments(event, this.props.forumPost)}>
              <img src={profile.profile_pic} alt={profile.username} />
              <div>
                  <h5 className="xxsmall-text">{profile.username}</h5>
                  <p className="small-text">{this.props.forumPost.post}</p>
              </div>
          </div>
          <PostOptions
              forumPost={this.props.forumPost}
              comments={this.props.comments}
              dispatch={this.props.dispatch}
              goToComments={(event) => this.goToComments(event, this.props.forumPost)}
              user={this.props.user}
              />
        </>
    );
  }
}

export default withRouter(Post);
