import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class Service extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.service.link === 'user-appointments') {
      if (this.props.user.id) {
        console.log(this.props.user);
        this.props.history.push(`/${this.props.service.link}`);
      } else {
        this.props.history.push('/login');
      }
    } else {
      this.props.history.push(`/${this.props.service.link}`);
    }
  }

  render() {
    const { service } = this.props;
    return (
      <li className="service" onClick={this.handleClick}>
        <img src={service.image} alt="service" height="60" width="120" />
        <h1 className="medium-text">{service.title}</h1>
        <p className="small-text">{service.description}</p>
      </li>
    );
  }
}

Service.propTypes = {
  // Name all the props and set their type
  service: PropTypes.object.isRequired
};

export default withRouter(Service);
