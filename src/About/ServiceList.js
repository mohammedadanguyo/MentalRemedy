import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Service from './Service';
import { Consumer } from '../context/Context';

class ServiceList extends Component {
  componentDidMount() {
    this.props.getServices();
  }

  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <ul className="services">
              {this.props.services.map((service) => (
                <Service service={service} key={service.id} user={value.user} />
              ))}
            </ul>
          );
        }}
      </Consumer>
    );
  }
}

ServiceList.propTypes = {
  // Name all the props and set their types
  services: PropTypes.array.isRequired,
  getServices: PropTypes.func.isRequired
};

export default ServiceList;
