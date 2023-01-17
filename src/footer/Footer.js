import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="wrap-footer">
        <div className="main-footer">
          <div className="footer-container">
            <div className="row">
              {/* column 1*/}
              <div className="col">
                <ul className="list-unstyled">
                  <h1 className="small-text">Contact</h1>
                  <li>Phone: 00000 00000</li>
                  <li>Temp place</li>
                  <li>345 holder street</li>
                  <li>Africa</li>
                </ul>
              </div>
              {/* column 2*/}
              <div className="col">
                <ul className="list-unstyled">
                  <h1 className="small-text">Links</h1>
                  <li>About</li>
                  <li>Mental Disoders</li>
                  <li>Specialists</li>
                  <li>My account</li>
                </ul>
              </div>
              {/* column 3*/}
              <div className="col">
                <ul className="list-unstyled">
                  <h1 className="small-text">Cities</h1>
                  <li>Nairobi </li>
                  <li>Johannesburg </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* footer bottom */}
        <div className="footer-bottom">
          <p className="xxsmall-text">&copy;{new Date().getFullYear()} team 158 - all rights reserved</p>
        </div>
      </div>
    );
  }
}
