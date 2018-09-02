import React from 'react';
import {shallow} from 'enzyme';
import {Counter} from './Counter';

test('Counter', () => {
    const COUNT = 1;
    const increment = () => {};
    const decrement = () => {};
    const counter = shallow(
      <Counter counter={COUNT} increment={increment} decrement={decrement}>
      </Counter>
    );

    expect(counter.text()).toContain('counter: ' + COUNT);
});