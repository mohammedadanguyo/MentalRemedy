import React, { Component } from 'react';
import img from '../context/images/male.svg';

export default class PostDetails extends Component {
  render() {
    return (
            <div className="post">
            <img src={img} alt={this.props.historyLocation.profile.username} />
            <div>
                <h5 className="xxsmall-text">{this.props.historyLocation.profile.username}</h5>
                <p className="small-text">{this.props.historyLocation.forumPost.post}</p>
            </div>
        </div>
    );
  }
}
