import React, { Component } from 'react';
import SingleMd from '../single-md/SingleMd';

export default class SingleMdPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
            <main>
                <SingleMd md={this.props.history.location.state.md} />
            </main>
    );
  }
}
