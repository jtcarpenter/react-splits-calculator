import React from 'react';
import { shallow } from 'enzyme';
import { RaceFormContainer } from './/RaceFormContainer';

const raceFormContainer = (
    <RaceFormContainer></RaceFormContainer>
);

describe('RaceFormContainer', () => {
    it('should render', () => {
        const wrapper = shallow(raceFormContainer);
        expect(wrapper.exists()).toBe(true);
    })
});