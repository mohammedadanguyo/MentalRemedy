import React, { Component } from 'react';

export default class FirebaseError extends Component {
  render() {
    return (
            <div
              className={this.props.errorMessage === 'Success'
                ? 'success' : this.props.errorMessage === '' ? 'd-none' : 'error'}>
              <p className="xxsmall-text">{this.props.errorMessage}</p>
            </div>
    );
  }
}
