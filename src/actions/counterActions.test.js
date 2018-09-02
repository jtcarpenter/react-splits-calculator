import * as actions from './counterActions';
import * as types from '../constants/ActionTypes';

describe('actions', () => {
    it('should create an action to increment counter', () => {
        const expectedAction = {
            type: types.INCREMENT
        }
        expect(actions.increment()).toEqual(expectedAction);
    });
});