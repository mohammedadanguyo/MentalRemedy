import React, { Component } from 'react';
import Specialists from '../sp-Page/Specialists';

export default class SpecialistsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main>
        <h1 className="heading">Specialists</h1>
        <Specialists />
      </main>
    );
  }
}
