import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Filter from './Filter';
import { specialists } from '../context/data';

Enzyme.configure({ adapter: new Adapter() });

describe('Filter Component', () => {
  it('receives data in props', () => {
    // Add sample data to MdPreview component using context
    const wrapper = shallow(
      <Filter
        list={specialists}
        getList={() => 'success'}
        dispatchType=""
        cityFilter={true}
        nameFilter={true}
        />
    );

    //confirm FilterByName component exists if nameFilter is set to true
    expect(wrapper.find('FilterByName').length).toEqual(1);

    //confirm FilterByCity component exists if cityFilter is set to true
    expect(wrapper.find('FilterByCity').length).toEqual(1);
  });
});
