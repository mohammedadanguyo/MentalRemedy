import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import { Context } from '../context/Context';
import Forum from './Forum';

Enzyme.configure({ adapter: new Adapter() });

describe('Forum Page', () => {
  it('renders without craching and passes down data', () => {
    // Add sample data to Forum component using context
    const wrapper = mount(<Router><Forum /></Router>, {
      wrappingComponent: Context.Provider,
      wrappingComponentProps: {
        value: {
          getForumPosts: () => 'success',
          dispatch: (args) => args,
          getComments: () => 'success',
          formActive: false,
          forumPosts: [],
          user: {}
        }
      }
    });
    // confirm getForumPosts method is consumed and passed down to ForumPostForm component
    expect(wrapper.find('ForumPostForm').props().getForumPosts()).toBe('success');
  });
});
