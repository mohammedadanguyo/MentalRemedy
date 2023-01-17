import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import Specialist from './Specialist';
import PreLoader from '../pre-loader/PreLoader';

export default class SpecialistsList extends Component {
  componentDidMount() {
    this.props.getSpecialists();
  }

  render() {
    return (
      <div className="spc">
        {this.props.specialists.map((specialist) => (
          <LazyLoad key={specialist.id} debounce={100} height={100} offset={100} placeholder={<PreLoader/>}>
            <Specialist specialist={specialist} key={specialist.id} />
          </LazyLoad>
        ))}
      </div>
    );
  }
}
