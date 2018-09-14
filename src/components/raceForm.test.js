import React from 'react';
import { shallow } from 'enzyme';
import { RaceForm } from './RaceForm.jsx';

const raceForm = (
    <RaceForm
        handleSubmit={() => {}}
        handleHoursChange={() => {}}
        handleMinutesChange={() => {}}
        handleSecondsChange={() => {}}
        handleRaceChange={() => {}}
    >
    </RaceForm>
);

describe('RaceForm', () => {
    it('should render', () => {
        const wrapper = shallow(raceForm);
        expect(wrapper.exists()).toBe(true);
    })
});