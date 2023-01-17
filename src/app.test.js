import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './app';
import NavBar from './navbar/NavBar';

describe('app module', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  configure({ adapter: new Adapter() });
  it('Checks if navbar is rendered', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<NavBar />)).toBe(true);
  });
});
