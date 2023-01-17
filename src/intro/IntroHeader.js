/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { MdFindReplace } from 'react-icons/md';
import { GiTeacher } from 'react-icons/gi';
import logo from '../favicon_io/android-chrome-512x512.png';

class IntroHeader extends Component {
  constructor(props) {
    super(props);
    this.mentalHealth = this.mentalHealth.bind(this);
    this.specialists = this.specialists.bind(this);
  }

  mentalHealth(event) {
    event.preventDefault();
    this.props.history.push('/mental-disorders');
  }

  specialists(event) {
    event.preventDefault();
    this.props.history.push('/specialists');
  }

  render() {
    return (
      <div className="skew">
        <div className="content">
          <h1 className="heading">Mental <img src={logo} alt="logo" className="logo" /> Remedy</h1>
          <p className="small-text">"Mistaken beliefs that mental health disorders cannot be treated, ignorance about the extent of mental health problems and stigma against those living with mental health disorders are the major issues that undermine any efforts made to enhance mental health treatment and awareness. In September 2015 the United Nations General Assembly included mental health and substance abuse in the global Sustainable Development Goals, marking the first time world leaders recognised mental health as a global priority."</p>

          <button className="small-heading large-btn"
          onClick={this.specialists}><MdFindReplace /> Find Specialists</button>
          <button className="small-heading large-btn"
          onClick={this.mentalHealth}><GiTeacher /> Mental Health</button>

        </div>
      </div>
    );
  }
}

export default withRouter(IntroHeader);
