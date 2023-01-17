import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import SinglePost from './SinglePost';
import PreLoader from '../pre-loader/PreLoader';

export default class ForumPosts extends Component {
  componentDidMount() {
    this.props.getForumPosts();
    this.props.getComments();
  }

  sortByDate = (itemA, itemB) => {
    return new Date(itemB.date) - new Date(itemA.date);
  }

  render() {
    const sortedPosts = this.props.forumPosts;
    sortedPosts.sort(this.sortByDate);
    return (
        <div className="forum-posts-wrapper">
            <h1 className="sub-heading">Forum Posts</h1>
            {this.props.forumPosts.map((key) => (
              <LazyLoad key={key.id} debounce={100} height={200} placeholder={<PreLoader/>}>
              <SinglePost
                key={key.id}
                forumPost={key}
              />
              </LazyLoad>
            ))}
        </div>
    );
  }
}
