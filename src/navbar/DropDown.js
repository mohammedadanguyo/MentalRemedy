import React, { Component } from 'react';
import { IoIosArrowDropdown, IoIosArrowDropup, IoIosChatbubbles } from 'react-icons/io';
import { MdAccountCircle } from 'react-icons/md';
import PropTypes from 'prop-types';
import { FiLogOut } from 'react-icons/fi';
import { FaBookmark } from 'react-icons/fa';
import DropDownLink from './DropDownLink';

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, dispatch, dropDownOpen) {
    event.preventDefault();
    dispatch({ type: 'TOGGLEMENU', payload: true });
    dispatch({ type: 'TOGGLEDROPDOWN', payload: !dropDownOpen });
  }

  render() {
    const { menuOpen, dropDownOpen, dispatch } = this.props;
    return (
        <li className="nav-item">
            <a href="/" className="nav-link small-text"
            onClick={(event) => this.handleClick(event, dispatch, dropDownOpen)} >
                {<MdAccountCircle/>}
                <span className={menuOpen ? 'link-des' : 'd-none'}>My Account
    <span className="small-text dd-icon blue-text">{dropDownOpen ? <IoIosArrowDropup/> : <IoIosArrowDropdown/>}</span></span>
            </a>
            <div className={dropDownOpen ? 'drop-down dd-active' : 'drop-down'}>
                <DropDownLink link="user-appointments" ddText="My Appointments" ddIcon={<FaBookmark/>} />
                <DropDownLink link="forum" ddText="Forum" ddIcon={<IoIosChatbubbles/>} />
                <DropDownLink link="logout" ddText="Logout" ddIcon={<FiLogOut/>} />
            </div>
        </li>
    );
  }
}

DropDown.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  dropDownOpen: PropTypes.bool,
  dispatch: PropTypes.func.isRequired
};

export default DropDown;
