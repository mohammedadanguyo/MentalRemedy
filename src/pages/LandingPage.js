import React, { Component } from 'react';
import IntroHeader from '../intro/IntroHeader';
import About from '../About/About';
import MdPreview from '../mdList-preview/MdPreview';
import SpecialistsPrev from '../specialists/SpecialistsPrev';

class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main>
        <IntroHeader />
        <About />
        <MdPreview />
        <SpecialistsPrev />
      </main>
    );
  }
}
export default LandingPage;
