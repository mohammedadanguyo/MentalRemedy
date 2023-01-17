import React, { Component } from 'react';
import { MdFindReplace } from 'react-icons/md';
import { withRouter } from 'react-router-dom';
import { Consumer } from '../context/Context';
import MdListPreview from './MdListPreview';

class MdPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intro: `Mental health refers to cognitive,
      behavioral, and emotional well-being. It is all about how people think, feel,
      and behave. Here are some of the
      common mental health disorders: `
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.history.push('/mental-disorders');
  }

  render() {
    return (
            <Consumer>
                {(value) => {
                  const { mentalDisorders, getMdlist } = value;
                  return (
                        <div className="md-preview">
                          <h1 className="heading">Mental Health</h1>
                            <p className="medium-text p-1">{this.state.intro}</p>
                            <MdListPreview mdList={mentalDisorders}
                            getMdlist={() => getMdlist()} />
                          <button className="small-heading large-btn"
                          onClick={this.handleClick}><MdFindReplace/> Show All</button>
                        </div>
                  );
                }}
            </Consumer>
    );
  }
}

export default withRouter(MdPreview);
