import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MdMain from '../mental-disorders/MdMain';

class MentalDisorders extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
            <main>
                <h1 className="heading">Mental Health</h1>
                <MdMain/>
            </main>
    );
  }
}

export default withRouter(MentalDisorders);
