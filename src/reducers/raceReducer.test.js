import raceReducer from './raceReducer';
import * as actionTypes from '../constants/actionTypes';

describe('raceReducer', () => {

    const state = {
        totalSeconds: 0,
        raceId: 'old_race',
        raceUnit: 'old_unit'
    };
    const raceUdatedAction = {
        type: actionTypes.RACE_UPDATED,
        payload: {
            totalSeconds: 10,
            raceId: 'new_race',
            raceUnit: 'new_unit'
        }
    };

    it('should update totalSeconds and race with new values', () => {
        const actual = raceReducer(state, raceUdatedAction);
        expect(actual).toEqual({
            totalSeconds: raceUdatedAction.payload.totalSeconds,
            raceId: raceUdatedAction.payload.raceId,
            raceUnit: raceUdatedAction.payload.raceUnit
        });
    });
});