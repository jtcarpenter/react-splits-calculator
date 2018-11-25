import * as actionTypes from '../constants/actionTypes';
import * as raceIds from '../constants/raceIds';
import * as raceUnits from '../constants/raceUnits';

const defaultState = {
    totalSeconds: 0,
    raceId: raceIds.MARATHON,
    raceUnit: raceUnits.MILES
};

export default function raceReducer(state = defaultState, action) {
    switch (action.type) {
    case actionTypes.RACE_UPDATED:
        return {
            ...state,
            totalSeconds: action.payload.totalSeconds,
            raceId: action.payload.raceId,
            raceUnit: action.payload.raceUnit
        };
    default:
        return state;
    }
}