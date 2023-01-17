import React, { Component } from 'react';

export default class AppointmentsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main>
        <h1 className="sub-heading">My Appointments</h1>
        <table className="appointment-table">
          <thead>
            <tr>
              <td>
                <h3>Specialist</h3>
              </td>
              <td>
                <h3>Name</h3>
              </td>
              <td>
                <h3>type</h3>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.history.location.state.specialist}</td>
              <td>{this.props.history.location.state.name}</td>
              <td>Walk-In</td>
            </tr>
          </tbody>
        </table>
      </main>
    );
  }
}
