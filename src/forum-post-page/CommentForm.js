import React, { Component } from 'react';
import { MdComment, MdCancel } from 'react-icons/md';
import PostDetails from './PostDetails';
import { comments } from '../firebase/firebase';
import { Consumer } from '../context/Context';

export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

      addPost = async (comment) => {
        const commentsCollection = await comments;
        await commentsCollection.add({ comment });
        this.props.getComments();
      }

      handleClick(event, user, dispatch) {
        event.preventDefault();
        if (user.id) {
          if (this.state.comment !== '') {
            const comment = {
              userId: user.id,
              comment: this.state.comment,
              forumId: this.props.historyLocation.forumPost.id,
              date: Date.now()
            };
            this.addPost(comment);
            dispatch({ type: 'TOGGLECOMMENTFORM', payload: false });
          }
        } else {
          this.props.history.push('/login');
        }
      }

      handleChange(event) {
        event.preventDefault();
        this.setState({ comment: event.target.value });
      }

      render() {
        return (
           <Consumer>
               {(value) => {
                 return (
                <div className="comment-modal">
                    <div className="comment-form post-form mt-1">
                        <PostDetails historyLocation={this.props.historyLocation} />
                        <textarea
                            name="comment-textarea"
                            id="comment-textarea"
                            className="intro-search xxsmall-text"
                            placeholder="Enter your comment here..."
                            onChange={(event) => this.handleChange(event)}
                        ></textarea>
                        <div className="comment-btns">
                            <button
                                className="small-heading large-btn mr-1"
                                onClick={(event) => {
                                  this.handleClick(event, value.user, value.dispatch);
                                }}
                                ><MdComment/> Comment
                            </button>
                            <button
                                className="small-heading large-btn"
                                onClick={() => value.dispatch({ type: 'TOGGLECOMMENTFORM', payload: false })}
                                ><MdCancel/> Cancel
                            </button>
                        </div>
                    </div>
                </div>
                 );
               }}
           </Consumer>
        );
      }
}
