import React, { Component, createRef } from 'react';
import { Consumer } from '../context/Context';

export default class AddSymptomForm extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.typeRef = createRef();
    this.sDesRef = createRef();
  }

  handleClick(event) {
    event.preventDefault();
    this.props.addSymptom(this.typeRef.current.innerText, this.sDesRef.current.value);
  }

  render() {
    return (
            <Consumer>
                {(value) => {
                  return (
                        <>
                        {value.symptomForm ? (
                          <>
                            <p className="xxsmall-text" ref={this.typeRef}>{this.props.type}</p>
                            <textarea name="s-description" ref={this.sDesRef} id={this.props.elementId} className="intro-search xxsmall-text mt-1" placeholder="Symptoms..."></textarea><br/>
                            <button className="large-btn" onClick={this.handleClick}>Save symptom</button>
                          </>
                        ) : (<span></span>)}
                        </>
                  );
                }}
            </Consumer>
    );
  }
}
