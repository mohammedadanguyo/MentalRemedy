import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import Md from './Md';
import PreLoader from '../pre-loader/PreLoader';

class MdList extends Component {
  componentDidMount() {
    this.props.getMdList();
  }

  render() {
    return (
            <div className="md-list">
                {this.props.mdList.map((key) => (
                  <LazyLoad key={key.id} debounce={100} height={200} placeholder={<PreLoader/>}>
                    <Md md={key} key={key.id} />
                  </LazyLoad>
                ))}
            </div>
    );
  }
}

MdList.propTypes = {
  mdList: PropTypes.array.isRequired,
  getMdList: PropTypes.func.isRequired
};

export default MdList;
