import * as raceActions from './raceActions';
import * as types from '../constants/ActionTypes';

describe('raceActions', () => {
    it('should create an action to set race parameters', () => {
        const expectedAction = {
            type: types.RACE_UPDATED
        };
        expect(raceActions.updateRace()).toEqual(expectedAction);
    });
});