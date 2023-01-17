import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Consumer } from '../context/Context';

class DropDownLink extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  closeMenu(dispatch) {
    dispatch({ type: 'TOGGLEMENU', payload: false });
    dispatch({ type: 'TOGGLEDROPDOWN', payload: false });
  }

  handleClick(dispatch) {
    this.props.history.push(`/${this.props.link}`);
    this.closeMenu(dispatch);
  }

  render() {
    const { ddText, ddIcon, link } = this.props;
    return (
            <Consumer>
              {(value) => {
                return (
                  <>
                    <a href="/" className="dd-link small-text"
                    onClick={(event) => {
                      event.preventDefault();
                      if (link === 'logout') {
                        this.closeMenu(value.dispatch);
                        value.logOut();
                      } else {
                        this.handleClick(value.dispatch);
                      }
                    }} >
                    {ddIcon} {ddText}
                    </a>
                  </>
                );
              }}
            </Consumer>
    );
  }
}

DropDownLink.propTypes = {
  ddText: PropTypes.string.isRequired,
  ddIcon: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired
};

export default withRouter(DropDownLink);
