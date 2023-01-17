import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FiLogIn } from 'react-icons/fi';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';
import NavList from './NavList';
import NavItem from './NavItem';
import { Context } from '../context/Context';

Enzyme.configure({ adapter: new Adapter() });

describe('Navbar Component', () => {
  it('toggles classes and menu icon in navbar component', () => {
    const wrapper = mount(<Router><NavBar/></Router>, {
      wrappingComponent: Context.Provider,
      wrappingComponentProps: {
        value: {
          menuOpen: false, dispatch: () => {}, user: { id: 1 }, dropDownMenu: false
        }
      }
    });
    // confirm default classes
    expect(wrapper.find('nav').hasClass('navbar-wrapper')).toBe(true);
    expect(wrapper.find('[data-menu-btn]').hasClass('inactive')).toBe(true);
    // confirm default icon
    expect(wrapper.find('[data-menu-btn]').find('BsChevronDoubleRight').length).toEqual(1);
    // toggle context value
    const provider = wrapper.getWrappingComponent();
    provider.setProps({
      value: {
        menuOpen: true, dispatch: () => {}, user: { id: 1, email: '' }, dropDownMenu: false
      }
    });
    // Confirm classes are toggled
    expect(wrapper.find('nav').hasClass('nav-active')).toBe(true);
    expect(wrapper.find('[data-menu-btn]').hasClass('menu-active')).toBe(true);
  });
});

describe('NavList Component', () => {
  it('showes dropdown menu only when user is logged in', () => {
    const dropDownOpen = false;
    // confirm dropdown is hidden if user isn't logged in
    const wrapper = shallow(<NavList menuOpen={false} dropDownOpen={dropDownOpen}
      dispatch={() => {} } user={{ }}/>);
    expect(wrapper.find('DropDown').length).toEqual(0);
    // Confirm dropdown exists when user is logged in
    wrapper.setProps({
      menuOpen: false, dispatch: () => {}, user: { id: 1 }, dropDownOpen: false
    });
    expect(wrapper.find('DropDown').props().dropDownOpen).toBe(false);
  });
});

describe('NavItem Component', () => {
  it('toggles classes for link description when menu is open/closed', () => {
    // confirm default class
    const wrapper = mount(<Router><NavItem menuOpen={false} id=""
      linkDes="testing" icon={<FiLogIn/>} link="/about" /></Router>, {
      wrappingComponent: Context.Provider,
      wrappingComponentProps: {
        value: {
          menuOpen: false, dispatch: () => {}
        }
      }
    });
    expect(wrapper.find('[data-link-des]').hasClass('d-none')).toBe(true);
    // confirm its class is toggled
    const provider = wrapper.getWrappingComponent();
    provider.setProps({
      value: {
        menuOpen: true, dispatch: () => {}
      }
    });
    expect(wrapper.find('[data-link-des]').hasClass('link-des')).toBe(true);
  });
});
