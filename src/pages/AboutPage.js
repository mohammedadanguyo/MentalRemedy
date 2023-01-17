import React, { Component } from 'react';
import Services from '../About/Services';

export default class AboutPage extends Component {
  render() {
    return (
      <main>
        <div className="head">
          <h1 className="heading">About us</h1>
        </div>

        <div className="about-content ">
          <p className="small-text">
            Welcome to Mental Remedy the one stop home for mental health. Our goal is to build a platform where we link
            mental health specialists to the community by establishing effective means of communications. Our main aim
            is to create awarness about the importance of mental health hence facilitate the removal of the stigma and
            scrutiny associated with mental disorders and curb the rise of this illnesses in the community. We aim to
            create a forum where users can socialize and have their questions answered by specialists. Specialists will
            be able to list their practices and profiles hence users can have access to various specialists in their
            city. Users will be able to schedhule appointments with mental health specialists of their choice.
          </p>
        </div>

        <Services />
      </main>
    );
  }
}
