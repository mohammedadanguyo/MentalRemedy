import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import { Context } from '../context/Context';
import About from './About';
import Bio from './Bio';
import Services from './Services';

Enzyme.configure({ adapter: new Adapter() });

const services = [
  {
    id: 1,
    title: 'Specialist plattform',
    description: 'A platform for specialist',
    image: '',
    link: 'specialists'
  }
];

describe('About component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<About/>);
    expect(wrapper.find('Bio').length).toEqual(1);
    expect(wrapper.find('Services').length).toEqual(1);
  });
});

describe('Bio component', () => {
  it('consumes data from context', () => {
    const wrapper = mount(<Bio />, {
      wrappingComponent: Context.Provider,
      wrappingComponentProps: {
        value: {
          aboutInfo: 'testing',
          user: {}
        }
      }
    });
    expect(wrapper.find('[data-about-info]').text()).toBe('testing');
  });
});

describe('Services component', () => {
  it('consumes data from context', () => {
    // Add sample data to services component using context
    const wrapper = mount(<Router><Services /></Router>, {
      wrappingComponent: Context.Provider,
      wrappingComponentProps: {
        value: {
          getServices: () => 'success', services: services, user: {}
        }
      }
    });
    // confirm get services method is consumed and passed down to ServiceList component
    expect(wrapper.find('ServiceList').props().getServices()).toBe('success');
    // confirm Service has required props
    expect(wrapper.find('ServiceList').find('Service').props().service).toHaveProperty('id');
    expect(wrapper.find('ServiceList').find('Service').props().service).toHaveProperty('title');
    expect(wrapper.find('ServiceList').find('Service').props().service).toHaveProperty('description');
    expect(wrapper.find('ServiceList').find('Service').props().service).toHaveProperty('image');
  });
});
