import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import { Context } from '../context/Context';
import { specialists } from '../context/data';
import SpecialistsPrev from './SpecialistsPrev';

Enzyme.configure({ adapter: new Adapter() });

describe('SpecialistPrev Module', () => {
  it('render without crashing', () => {
    // Add sample data to SpecialistsPrev component using context
    const wrapper = mount(<Router><SpecialistsPrev /></Router>, {
      wrappingComponent: Context.Provider,
      wrappingComponentProps: {
        value: {
          getSpecialists: () => 'success', specialists: specialists
        }
      }
    });
    // confirm sample data is consumed and passed down to SpecialistsLists component
    expect(wrapper.find('SpecialistsLists').props().specialists.length).toBeGreaterThan(1);
    // confirm getSpecialists method is consumed and passed down to SpecialistsLists component
    expect(wrapper.find('SpecialistsLists').props().getSpecialists()).toBe('success');
  });
});
