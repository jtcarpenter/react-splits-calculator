import React from 'react';
import { shallow } from 'enzyme';
import { SplitsContainer } from 'components/splits/SplitsContainer';
import * as raceIds from 'constants/raceIds';
import * as raceUnits from 'constants/raceUnits';

const splitsContainer = (
    <SplitsContainer
        totalSeconds={ 0 }
        raceId={ raceIds.MARATHON }
        raceUnit={ raceUnits.MILES }
    >
    </SplitsContainer>
);
const race = {
    mockRaceUnit: 10
};
const time = 100;
const raceUnit = 'mockRaceUnit';
const splitTime = 10;

describe('SplitsContainer', () => {

    it('should render', () => {
        const wrapper = shallow(splitsContainer);
        expect(wrapper.exists()).toBe(true);
    });

    describe('splitTime', () => {

        it('should calculate a split time in seconds', () => {
            const wrapper = shallow(splitsContainer);
            const instance = wrapper.instance();
            expect(instance.splitTime(race, time, raceUnit)).toBe(10);
        });
    });

    describe('makeSplits', () => {

        it('should return an array of split objects of length 10', () => {
            const wrapper = shallow(splitsContainer);
            const instance = wrapper.instance();
            const splits = instance.makeSplits(race, splitTime, raceUnit, time);
            expect(splits.length).toBe(10);
            expect(splits[0].time).toBe(10);
        });

        it('should set \'time\' of 10 on first item in array', () => {
            const wrapper = shallow(splitsContainer);
            const instance = wrapper.instance();
            const splits = instance.makeSplits(race, splitTime, raceUnit, time);
            expect(splits[0].time).toBe(10);
        });

        it('should not set property of \'last\'', () => {
            const wrapper = shallow(splitsContainer);
            const instance = wrapper.instance();
            const splits = instance.makeSplits(race, splitTime, raceUnit, time);
            expect(splits[0].last).toBeFalsy();
        });

        it('should set \'time\' of 100 on last item in array', () => {
            const wrapper = shallow(splitsContainer);
            const instance = wrapper.instance();
            const splits = instance.makeSplits(race, splitTime, raceUnit, time);
            expect(splits[splits.length - 1].time).toBe(100);
        });

        it('should set property of \'last\'', () => {
            const wrapper = shallow(splitsContainer);
            const instance = wrapper.instance();
            const splits = instance.makeSplits(race, splitTime, raceUnit, time);
            expect(splits[splits.length - 1].last).toBeTruthy();
        });
    });
});