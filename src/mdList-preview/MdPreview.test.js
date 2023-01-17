import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import { Context } from '../context/Context';
import MdPreview from './MdPreview';

Enzyme.configure({ adapter: new Adapter() });

const mentalDisorders = [
  {
    id: 101,
    title: 'Anxiety disorder',
    description: "A mental health disorder characterised by feelings of worry, anxiety or fear that are strong enough to interfere with one's daily activities.",
    diagnosis: 'Usually self-diagnosable',
    symptoms: [{
      id: 401,
      type: 'Cognitive',
      description: 'lack of concentration, racing thoughts, or unwanted thoughts'
    },
    {
      id: 402,
      type: 'Behavioural',
      description: 'hypervigilance, irritability, or restlessness'
    },
    {
      id: 403,
      type: 'Whole Body',
      description: 'fatigue or sweating'
    },
    {
      id: 404,
      type: 'Common',
      description: 'anxiety, excessive worry, angor animi, fear, insomnia, nausea, palpitations, or trembling'
    }],
    treatment: 'Treatment includes counselling or medication, including antidepressants.'
  }
];

describe('MdPreview component', () => {
  it('it consumes data from context', () => {
    // Add sample data to MdPreview component using context
    const wrapper = mount(<Router><MdPreview /></Router>, {
      wrappingComponent: Context.Provider,
      wrappingComponentProps: {
        value: {
          getMdlist: () => 'success', mentalDisorders: mentalDisorders
        }
      }
    });
    // confirm getMdList method is consumed and passed down to MdListPreview component
    expect(wrapper.find('MdListPreview').props().getMdlist()).toBe('success');
    // confirm MdItemPreview has the required properties
    expect(wrapper.find('MdListPreview').find('MdItemPreview').props().mentalDisorder).toHaveProperty('id');
    expect(wrapper.find('MdListPreview').find('MdItemPreview').props().mentalDisorder).toHaveProperty('title');
    expect(wrapper.find('MdListPreview').find('MdItemPreview').props().mentalDisorder).toHaveProperty('description');
  });
});
