import React from 'react';
import { shallow } from 'enzyme';
import { RaceFormContainer } from './/RaceFormContainer';
import * as raceUnits from '../../constants/raceUnits';
import * as raceIds from '../../constants/raceIds';

const raceFormContainer = (
    <RaceFormContainer
        raceId={ raceIds.MARATHON }
        raceUnit={ raceUnits.MILES }
        raceUpdated={ () => {} }
    >
    </RaceFormContainer>
);

describe('RaceFormContainer', () => {

    it('should render', () => {
        const wrapper = shallow(raceFormContainer);
        expect(wrapper.exists()).toBe(true);
    });
});