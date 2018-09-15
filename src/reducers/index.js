import {combineReducers} from 'redux';
import counter from './counter';
import raceReducer from './raceReducer';

export default combineReducers({
    counter,
    raceReducer
});