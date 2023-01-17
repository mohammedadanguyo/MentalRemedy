import React, { Component } from 'react';

export default class PasswordError extends Component {
  render() {
    return (
            <div
              className={this.props.passwordError === '' ? 'd-none' : 'error'}>
              <p className="xxsmall-text">{this.props.passwordError}</p>
            </div>
    );
  }
}
