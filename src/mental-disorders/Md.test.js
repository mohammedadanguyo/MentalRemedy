import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Context } from '../context/Context';
import { mentalDisorders } from '../context/data';
import MdMain from './MdMain';

Enzyme.configure({ adapter: new Adapter() });

describe('Mental disorders Page', () => {
  it('render without crashing', () => {
    // Add sample data to MdMain component using context
    const wrapper = mount(<MdMain />, {
      wrappingComponent: Context.Provider,
      wrappingComponentProps: {
        value: {
          getMdlist: () => 'success',
          mentalDisorders: mentalDisorders,
          dispatchType: '',
          titleSearch: '',
          citySearch: '',
          nameSearch: ''
        }
      }
    });
    // confirm sample data is consumed and passed down to MdList component
    expect(wrapper.find('MdList').props().mdList.length).toBeGreaterThan(1);
    // confirm getSpecialists method is consumed and passed down to SpecialistsLists component
    expect(wrapper.find('MdList').props().getMdList()).toBe('success');
  });
});
