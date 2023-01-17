import React, { Component } from 'react';
import CommentForm from './CommentForm';
import { Consumer } from '../context/Context';

export default class CommentModal extends Component {
  render() {
    return (
            <Consumer>
                {(value) => {
                  return (
                    <>
                        {value.commentForm ? (
                            <CommentForm
                                historyLocation={this.props.historyLocation}
                                getComments={value.getComments}
                            />
                        ) : (<span></span>)}
                    </>
                  );
                }}
            </Consumer>
    );
  }
}
