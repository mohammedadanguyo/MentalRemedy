import React, { Component } from 'react';
import Comment from '../forum/Comment';
import PostOptions from '../forum/PostOptions';
import CommentModal from './CommentModal';
import { Consumer } from '../context/Context';
import PostDetails from './PostDetails';

export default class ForumPost extends Component {
  componentDidMount() {
    this.props.getComments();
    this.props.getProfiles();
  }

  render() {
    return (
            <Consumer>
                {(value) => {
                  return (
                    <>
                      <PostDetails historyLocation={this.props.historyLocation} />
                      <PostOptions
                          forumPost={this.props.historyLocation.forumPost}
                          comments={this.props.historyLocation.comments}
                          user={this.props.historyLocation.user}
                          deleteOption={true}
                          addComment={true}
                          goToComments={() => null}
                          goToCommentForm={() => value.dispatch({ type: 'TOGGLECOMMENTFORM', payload: true })}
                          />
                      <CommentModal historyLocation={this.props.historyLocation} />
                      <div className="comments">
                        <h1 className="medium-text">Comments</h1>
                        {value.comments.map((key) => (
                            <Comment
                                key={key.id}
                                comment={key}
                                profiles={value.profiles}
                                user={this.props.historyLocation.user}
                                forumPost={this.props.historyLocation.forumPost}
                                getComments={value.getComments}
                                />
                        ))}
                      </div>
                    </>
                  );
                }}
            </Consumer>
    );
  }
}
