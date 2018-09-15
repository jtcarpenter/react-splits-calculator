import React from 'react';
import raceFormConfig from '../config/raceFormConfig';

export function RaceForm({ handleSubmit, handleChange }) {

    let defaultRace = null;
    for (let prop in raceFormConfig.race.options) {
        if (raceFormConfig.race.options[prop].default) {
            defaultRace = raceFormConfig.race.options[prop].value
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <label>
                time:
                <input
                    type="number"
                    onChange={ handleChange }
                    name={ raceFormConfig.hours.name }
                />
                <input
                    type="text"
                    onChange={ handleChange }
                    name={ raceFormConfig.minutes.name }
                />
                <input type="text" 
                    onChange={ handleChange }
                    name={ raceFormConfig.seconds.name }
                />
            </label>
            <select
                name={ raceFormConfig.race.name }
                onChange={ handleChange }
                value={ defaultRace }
            >
                <option value={ raceFormConfig.race.options.marathon.value } >
                    Marathon
                </option>
                <option value={ raceFormConfig.race.options.half.value } >
                    Half Marathon
                </option>
                <option value={ raceFormConfig.race.options.tenKM.value } >
                    10K
                </option>
                <option value={ raceFormConfig.race.options.fiveKM.value } >
                    5K
                </option>
            </select>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default RaceForm;