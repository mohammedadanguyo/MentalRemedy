import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ForumPost from '../forum-post-page/ForumPost';
import { Consumer } from '../context/Context';

class ForumPostPage extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.history.push('/forum');
  }

  render() {
    const historyLocation = this.props.history.location.state;
    return (
            <Consumer>
              {(value) => {
                return (
                  <main>
                <h1 className="sub-heading">Forum Post</h1>
                <div className="breadcrumbs">
                    <span className="xxsmall-text">
                        <a href="/" onClick={this.handleClick}>Back to Forum</a> / {historyLocation.profile.username}`s post
                    </span>
                </div>
                <div className="forum-posts-wrapper">
                    <div className="single-post">
                        <ForumPost historyLocation={historyLocation} getComments={value.getComments} getProfiles={value.getProfiles} />
                    </div>
                </div>
            </main>
                );
              }}
            </Consumer>
    );
  }
}

export default withRouter(ForumPostPage);
