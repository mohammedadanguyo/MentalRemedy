import React, { Component } from 'react';
import ForumPostIntro from './ForumPostIntro';
import ForumPosts from './ForumPosts';
import { Consumer } from '../context/Context';
import ForumPostForm from './ForumPostForm';

export default class Forum extends Component {
  render() {
    return (
           <Consumer>
             {(value) => {
               return (
                <div className="forum-wrapper">
                  <ForumPostIntro
                    dispatch={value.dispatch}
                    user={value.user}
                    formActive={value.forumPostForm} />
                  <ForumPostForm getForumPosts={value.getForumPosts} />
                  <ForumPosts
                    getForumPosts={value.getForumPosts}
                    getComments={value.getComments}
                    forumPosts={value.forumPosts}
                    />
                </div>
               );
             }}
           </Consumer>
    );
  }
}
