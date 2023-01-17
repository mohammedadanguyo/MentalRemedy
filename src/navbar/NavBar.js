import React, { Component } from 'react';
import { BsChevronDoubleRight } from 'react-icons/bs';
import NavList from './NavList';
import { Consumer } from '../context/Context';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(event, menuOpen, dispatch) {
    event.preventDefault();
    // Change the value of a state in the context API
    dispatch({ type: 'TOGGLEMENU', payload: !menuOpen });
    dispatch({ type: 'TOGGLEDROPDOWN', payload: false });
  }

  render() {
    return (
      <Consumer>
        {(value) => {
          // Get states from context API
          const {
            menuOpen, dispatch, user, dropDownOpen
          } = value;
          return (
            <nav className={menuOpen ? 'navbar-wrapper nav-active' : 'navbar-wrapper'}>
              <a data-menu-btn href="/" className={menuOpen
                ? 'small-text blue menu menu-active'
                : 'small-text blue menu inactive'}
                onClick={(event) => this.toggleMenu(event, menuOpen, dispatch)} >
                <BsChevronDoubleRight/>
              </a>
              <NavList menuOpen={menuOpen} user={user}
              dropDownOpen={dropDownOpen} dispatch={dispatch} />
            </nav>
          );
        }}
      </Consumer>
    );
  }
}

export default NavBar;
