import React, { Component } from 'react';
import { FaRegComments } from 'react-icons/fa';
import { MdDeleteForever, MdAddToQueue } from 'react-icons/md';
import { withRouter } from 'react-router-dom';
import { forumPosts } from '../firebase/firebase';

class PostOptions extends Component {
  constructor(props) {
    super(props);
    this.deletePost = this.deletePost.bind(this);
  }

  deleteFromDb = async (currentForumId) => {
    try {
      const forumPostsCollection = await forumPosts.get();
      forumPostsCollection.forEach((post) => {
        if (currentForumId === post.id) {
          post.ref.delete();
          this.props.history.push('/forum');
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  deletePost(event) {
    event.preventDefault();
    const currentForumId = this.props.match.params.forumpostid;
    this.deleteFromDb(currentForumId);
  }

  render() {
    const commentsForThisPost = [];
    this.props.comments.map((key) => key.forumId === this.props.forumPost.id ? commentsForThisPost.push(key) : null);
    return (
            <div className="post-options">
                    <button className="plain-btn xxsmall-text"
                    onClick={(event) => this.props.goToComments(event)}>
                    <FaRegComments/><span className="ml-1 mr-1">{commentsForThisPost.length}</span>
                        {this.props.comments > 1 || this.props.comments < 1
                          ? 'Comments' : 'Comment'}</button>

                    {this.props.addComment ? (
                      <button className="plain-btn xxsmall-text mr-1"
                      onClick={(event) => this.props.user.id ? this.props.goToCommentForm(event)
                        : this.props.history.push('/login')}>
                        <MdAddToQueue/> Add Comment
                      </button>
                    ) : (<span></span>)}
                    {/* The delete button is by the user who posted it */}
                    {this.props.deleteOption ? (
                      <>
                      {this.props.user.id === this.props.forumPost.userId
                        ? <button
                            className="plain-btn xxsmall-text mr-1 right"
                            onClick={this.deletePost}
                          ><MdDeleteForever/> Delete Post</button>
                        : (<span></span>)
                      }
                      </>
                    ) : (<span></span>)}
            </div>
    );
  }
}

export default withRouter(PostOptions);
