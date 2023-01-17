import React, { Component } from 'react';
import { Consumer } from '../context/Context';
import ServiceList from './ServiceList';

export default class Services extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { getServices, services } = value;
          return (
            <div className="container">
              <h1 className="sub-heading">What we Do</h1>
              <hr />
              <ServiceList services={services} getServices={() => getServices()} />
            </div>
          );
        }}
      </Consumer>
    );
  }
}
