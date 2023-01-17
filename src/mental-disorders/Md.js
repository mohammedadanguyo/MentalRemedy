import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class Md extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push({
      pathname: `/mental-disorders/${this.props.md.id}/${this.props.md.title}`,
      state: {
        md: this.props.md
      }
    });
  }

  render() {
    return (
            <div className="md-item-prev md-item" onClick={this.handleClick}>
                <div className="title">
                  <h5 className="small-heading">{this.props.md.title}</h5>
                </div>
                <div className="small-text short-des">{this.props.md.description}</div>
                <button className="plain-btn right small-heading">Learn More</button>
            </div>
    );
  }
}

Md.propTypes = {
  md: PropTypes.object.isRequired
};

export default withRouter(Md);
