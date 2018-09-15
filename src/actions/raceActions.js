import * as types from '../constants/actionTypes';

export function updateRace(payload) {
    return {
        type: types.RACE_UPDATED,
        payload
    };
}