import React, { Component } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { comments } from '../firebase/firebase';

export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.deleteComment = this.deleteComment.bind(this);
  }

  delete = async (currentCommentId) => {
    try {
      const commentsCollection = await comments.get();
      commentsCollection.forEach((comment) => {
        if (currentCommentId === comment.id) {
          comment.ref.delete();
          this.props.getComments();
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  deleteComment(event) {
    event.preventDefault();
    const currentCommentId = this.props.comment.id;
    this.delete(currentCommentId);
  }

  render() {
    let commenter = {};
    this.props.profiles.map((key) => key.userId === this.props.comment.userId ? commenter = key : null);
    return (
        <>
            {this.props.comment.forumId === this.props.forumPost.id ? (
            <>
              <div className="post">
              <img src={commenter.profile_pic} alt={commenter.username} ></img>
                <div>
                  <h5 className="xxsmall-text">{commenter.username}</h5>
                  <p className="xxsmall-text">{this.props.comment.comment}</p>
                  {this.props.user.id === this.props.comment.userId
                    ? <button
                        className="plain-btn xxsmall-text"
                        onClick={this.deleteComment}
                      ><MdDeleteForever/> Delete Comment</button>
                    : (<span></span>)
                  }
                </div>
              </div>
            </>
            ) : (<span></span>)}
        </>
    );
  }
}
