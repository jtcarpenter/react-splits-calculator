import React from 'react';
import { shallow } from 'enzyme';
import { RaceForm } from './RaceForm.jsx';
import * as raceIds from '../../constants/raceIds';
import * as raceUnits from '../../constants/raceUnits';

const raceForm = (
    <RaceForm
        handleSubmit={() => {}}
        handleTimeChange={() => {}}
        handleRaceIdChange={() => {}}
        handleRaceUnitChange={() => {}}
        raceUnit= { raceUnits.MILES }
        raceId={ raceIds.MARATHON }
    >
    </RaceForm>
);

describe('RaceForm', () => {

    it('should render', () => {
        const wrapper = shallow(raceForm);
        expect(wrapper.exists()).toBe(true);
    });
});