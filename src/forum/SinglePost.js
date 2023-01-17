import React, { Component } from 'react';
import Post from './Post';
import { Consumer } from '../context/Context';

export default class SinglePost extends Component {
  render() {
    return (
           <Consumer>
               {(value) => {
                 return (
                    <div className="single-post">
                      <Post
                          forumPost={this.props.forumPost}
                          user={value.user}
                          getProfiles={value.getProfiles}
                          profiles={value.profiles}
                          dispatch={value.dispatch}
                          comments={value.comments}
                          getComments={value.getComments}
                          />
                    </div>
                 );
               }}
           </Consumer>
    );
  }
}
