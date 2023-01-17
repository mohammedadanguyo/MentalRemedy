import React, { Component } from 'react';
import Forum from '../forum/Forum';

export default class ForumPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
            <main>
                <h1 className="heading">Forum</h1>
                <Forum/>
            </main>
    );
  }
}
