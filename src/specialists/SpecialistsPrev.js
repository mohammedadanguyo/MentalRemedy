import React, { Component } from 'react';
import { MdFindReplace } from 'react-icons/md';
import { withRouter } from 'react-router-dom';
import { Consumer } from '../context/Context';
import SpecialistsLists from './SpecialistsLists';

class SpecialistsPrev extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.history.push('/specialists');
  }

  render() {
    return (
      <Consumer>
        {(value) => {
          const { getSpecialists, specialists, startSlider } = value;
          return (
            <div className="preview" onLoad={() => startSlider()}>
              <h1 className="heading">Specialists Preview</h1>
              <hr />
              <div className="swiper-container">
                <SpecialistsLists specialists={specialists}
                getSpecialists={() => getSpecialists()} startSlider={() => startSlider()} />
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </div>
              <button className="small-heading large-btn"
              onClick={this.handleClick}><MdFindReplace/> Browse All</button>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default withRouter(SpecialistsPrev);
