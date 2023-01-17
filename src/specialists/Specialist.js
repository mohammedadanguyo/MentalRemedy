import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaMapMarkerAlt } from 'react-icons/fa';

class Specialist extends Component {
  render() {
    return (
      <>
      {this.props.specialists.indexOf(this.props.specialist) < 7 ? (
          <div className="profile-card swiper-slide">
            <img src={this.props.specialist.profile_pic} alt="" className="profile-pic" height="120" />
            <h1 className="small-heading">{this.props.specialist.name}</h1>
            <h4 className="small-text location">
              <FaMapMarkerAlt /><br/>
              <span className="black-text small-headingy">City: </span>{this.props.specialist.city}
            </h4>
            <p className="review small-text">{this.props.specialist.reviews[0].review}</p>
            <button className="small-heading plain-btn">More reviews</button>
            <div className="btns">
              <button className="btn1">View Profile</button>
              <button className="btn2">Book Appointment</button>
            </div>
          </div>
      ) : (<span></span>)}
    </>
    );
  }
}

Specialist.propTypes = {
  // Name all the props and set their type
  specialist: PropTypes.object.isRequired
};

export default Specialist;
