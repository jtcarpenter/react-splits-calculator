import raceReducer from './raceReducer';
import * as actionTypes from '../constants/actionTypes';

describe('raceReducer', () => {

    const state = {
        totalSeconds: 0,
        race: 'old_race'
    };
    const raceUdatedAction = {
        type: actionTypes.RACE_UPDATED,
        payload: {
            totalSeconds: 10,
            race: 'new_race'
        }
    };

    it('should update totalSeconds and race with new values', () => {
        const actual = raceReducer(state, raceUdatedAction)
        expect(actual).toEqual({
            totalSeconds: raceUdatedAction.payload.totalSeconds,
            race: raceUdatedAction.payload.race
        })
    });
});