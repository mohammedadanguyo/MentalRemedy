import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Consumer } from '../context/Context';

class NavItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, dispatch) {
    event.preventDefault();
    this.props.history.push(`/${this.props.link}`);
    dispatch({ type: 'TOGGLEMENU', payload: false });
    dispatch({ type: 'TOGGLEDROPDOWN', payload: false });
  }

  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <li className="nav-item">
              <a href="/" className="nav-link small-text"
              onClick={(event) => this.handleClick(event, value.dispatch)}>
              {this.props.icon}
              <span data-link-des className={value.menuOpen ? 'link-des' : 'd-none'}>
               {this.props.linkDes}
              </span>
              </a>
          </li>
          );
        }}
      </Consumer>
    );
  }
}

NavItem.propTypes = {
  // Name all the props and set their type
  icon: PropTypes.object.isRequired,
  linkDes: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default withRouter(NavItem);
