import React, { Component } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { withRouter } from 'react-router-dom';

class Specialist extends Component {
  constructor(props) {
    super(props);
    this.profileHandler = this.profileHandler.bind(this);
  }

  profileHandler() {
    this.props.history.push({
      pathname: `/specialist/${this.props.specialist.id}`,
      state: {
        specialist: this.props.specialist
      }
    });
  }

  render() {
    return (
      <div>
        <div className="profile-card">
          <img src={this.props.specialist.profile_pic} alt="" className="profile-pic" height="120" />
          <h1 className="small-heading">{this.props.specialist.name}</h1>
          <h4 className="small-text location">
            <FaMapMarkerAlt />
            <br />
            <span className="black-text small-headingy">City: </span>
            {this.props.specialist.city}
          </h4>
          <p className="review small-text">{this.props.specialist.reviews[0].review}</p>
          <button className="small-heading plain-btn">More reviews</button>
          <div className="btns">
            <button className="btn1" onClick={this.profileHandler}>
              View Profile
            </button>
            <button className="btn2">Book Appointment</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Specialist);
