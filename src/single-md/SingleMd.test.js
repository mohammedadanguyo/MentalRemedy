import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import { mentalDisorders } from '../context/data';
import SingleMd from './SingleMd';

Enzyme.configure({ adapter: new Adapter() });

describe('SingleMd Component', () => {
  it('receives data in props', () => {
    let md = {};
    mentalDisorders.map((key) => (
      mentalDisorders.indexOf(key) < 1 ? md = key : null
    ));
    const wrapper = mount(
        <Router>
            <SingleMd
            md={md}
            />
        </Router>
    );

    expect(wrapper.props().children.props.md).toHaveProperty('id');
    expect(wrapper.props().children.props.md).toHaveProperty('title');
    expect(wrapper.props().children.props.md).toHaveProperty('description');
    expect(wrapper.props().children.props.md).toHaveProperty('diagnosis');
    expect(wrapper.props().children.props.md).toHaveProperty('symptoms');
    expect(wrapper.props().children.props.md).toHaveProperty('treatment');
  });
});
