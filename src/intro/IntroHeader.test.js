import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import IntroHeader from './IntroHeader';

describe('IntroHeader Module', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><IntroHeader /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
