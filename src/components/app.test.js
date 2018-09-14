import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

test('App', () => {
    const app = shallow(
      <App></App>
    );
    expect(app.exists()).toBe(true);
});