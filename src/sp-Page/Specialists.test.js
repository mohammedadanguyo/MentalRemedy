import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Context } from '../context/Context';
import { specialists } from '../context/data';
import Specialists from './Specialists';

Enzyme.configure({ adapter: new Adapter() });

describe('SpecialistPage Module', () => {
  it('render without crashing', () => {
    // Add sample data to SpecialistsPrev component using context
    const wrapper = mount(<Specialists />, {
      wrappingComponent: Context.Provider,
      wrappingComponentProps: {
        value: {
          getSpecialists: () => 'success',
          specialists: specialists,
          dispatchType: '',
          titleSearch: '',
          citySearch: '',
          nameSearch: ''
        }
      }
    });
    // confirm sample data is consumed and passed down to SpecialistsLists component
    expect(wrapper.find('SpecialistsList').props().specialists.length).toBeGreaterThan(1);
    // confirm getSpecialists method is consumed and passed down to SpecialistsLists component
    expect(wrapper.find('SpecialistsList').props().getSpecialists()).toBe('success');
  });
});
