import React, { Component } from 'react';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import Form from './Form';

export default class SingleSp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="detail">
          <div className="left">
            <div className="single-sp">
              <img src={this.props.specialist.profile_pic} height="200" alt="specialist" />
              <h1 className="large-text">{this.props.specialist.name}</h1>
              <h3 className="small-text location">
                <FaMapMarkerAlt />

                <span className="black-text small-headingy">City: </span>
                {this.props.specialist.city}
              </h3>
              <h5>
                <span>Hospital :{this.props.specialist.hospital_associations} </span>
              </h5>
            </div>
            <div className="recent-reviews">
              <div className="ratings">
                <h4>Overall Rating</h4>
                <h1>5/5</h1>
                <span>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
              </div>
              <div>
                <h2>RECENT REVIEWS</h2>
                {this.props.specialist.reviews.map((item) => (
                  <div key={item.id}>
                    <h3></h3>
                    <p>{item.review}</p>
                    <small>{item.intials}</small>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Form name={this.props.specialist.name} />
        </div>
        <div className="more-details">
          <h1>Languages spoken</h1>
          <p>{this.props.specialist.languages}</p>
          <h1 className="">Education And Training</h1>
          {this.props.specialist.education.map((item) => (
            <p key={item.id}>
              {item.facility}({item.type})
            </p>
          ))}
          <h1>Provider Gender</h1>
          <p>{this.props.specialist.gender}</p>
          <h1>Liscence Number </h1>
          <p>{this.props.specialist.liscence_number}</p>
        </div>
      </>
    );
  }
}
