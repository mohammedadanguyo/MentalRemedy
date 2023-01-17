import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MdItemPreview from './MdItemPreview';
import { mentalDisorders } from '../context/data';

class MdListPreview extends Component {
  componentDidMount() {
    this.props.getMdlist();
  }

  render() {
    const { mdList } = this.props;
    return (
            <ul className="md-list-prev">
                {mdList.map((key) => (
                <MdItemPreview mentalDisorder={key} key={key.id} mdList={mentalDisorders} />
                ))}
            </ul>
    );
  }
}

MdListPreview.propTypes = {
  mdList: PropTypes.array.isRequired,
  getMdlist: PropTypes.func.isRequired
};

export default MdListPreview;
