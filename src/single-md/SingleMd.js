import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SingleMd extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.history.push('/mental-disorders');
  }

  render() {
    return (
            <div className="lg-container">
                <h1 className="sub-heading">{this.props.md.title}</h1>
                <div className="breadcrumbs">
                    <span className="xxsmall-text">
                        <a href="/" onClick={this.handleClick}>Mental Disorders</a> / {this.props.md.title}
                    </span>
                </div>
                <h2 className="medium-text">Description</h2>
                <p className="small-text">{this.props.md.description}</p>
                <h2 className="medium-text">Diagnosis</h2>
                <p className="small-text">{this.props.md.diagnosis}</p>
                <h2 className="medium-text">Symptoms</h2>
                <div className="symptoms">
                {this.props.md.symptoms.map((key) => (
                    <div className="symptoms-wrapper" key={key.id}>
                        <h3 className="small-heading">{key.type}</h3>
                        <p className="small-text">{key.description}</p>
                    </div>
                ))}
                </div>
                <h2 className="medium-text">Treatment</h2>
                <p className="small-text">{this.props.md.treatment}</p>
            </div>
    );
  }
}

export default withRouter(SingleMd);
