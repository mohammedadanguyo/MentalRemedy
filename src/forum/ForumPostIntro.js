import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import postIntro from '../context/images/post.svg';

class ForumPostIntro extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, dispatch) {
    event.preventDefault();
    if (this.props.user.id) {
      dispatch({ type: 'TOGGLEPOSTFORM', payload: !this.props.formActive });
    } else {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
            <div className="forum-post-intro">
                <div className="post-intro-right">
                  <img src={postIntro} alt="post-intro" className="post-intro-img" />
                </div>
                <div className="post-intro-left">
                  <h1 className="sub-heading">Get your solution</h1>
                  <p className="xxsmall-text">Post questions about anything concerning mental health and get answered by Specialists accross different Countries.</p>
                  <button
                    className="small-heading large-btn m-0"
                    onClick={(event) => this.handleClick(event, this.props.dispatch)}
                    >{this.props.formActive ? 'Cancel' : 'Post Your Question'}</button>
                </div>
            </div>
    );
  }
}

export default withRouter(ForumPostIntro);
