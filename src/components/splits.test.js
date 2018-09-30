import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Splits } from './Splits.jsx';

const splits = [];
const raceUnit = '';
const raceId = '';

const splitsComp = (
    <Splits
        splits={ splits }
        raceUnit={ raceUnit }
        raceId={ raceId }
    ></Splits>
);

describe('Splits', () => {
    it('should render', () => {
        const wrapper = shallow(splitsComp);
        expect(wrapper.exists()).toBe(true);
    });

    it('should display correctly', () => {
        const splits = renderer.create(splitsComp);
        expect(splits.toJSON()).toMatchSnapshot();
    });
});