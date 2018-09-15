import * as types from '../constants/actionTypes';
import raceFormConfig from '../config/raceFormConfig';

let defaultRace = null;
for (let prop in raceFormConfig.race.options) {
    if (raceFormConfig.race.options[prop].default) {
        defaultRace = raceFormConfig.race.options[prop].value
    }
}
const defaultState = {
    totalSeconds: 0,
    race: defaultRace
}

export default function counter(state = defaultState, action) {
    switch (action.type) {
    case types.RACE_UPDATED:
        return Object.assign({}, state, {
            totalSeconds: action.payload.totalSeconds,
            race: action.payload.race
        });
    default:
        return state;
    }
}