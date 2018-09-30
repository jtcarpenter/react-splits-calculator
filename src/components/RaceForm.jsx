import React from 'react';
import PropTypes from 'prop-types';
import raceConfig from '../config/raceConfig';
import * as raceUnits from '../constants/raceUnits';
import * as timeUnits from '../constants/timeUnits';
import * as raceForm from '../constants/raceForm';

export function RaceForm({ handleSubmit, handleChange, raceUnit, raceId }) {

    const race = raceConfig.races.find((race) => {
        return race.id === raceId;
    });

    return (
        <form onSubmit={ handleSubmit }>
            <label>
                time:
                <input
                    type="number"
                    onChange={ handleChange }
                    name={ timeUnits.HOURS }
                    placeholder="Hours"
                    min="0"
                    max="24"
                />
                <input
                    type="number"
                    onChange={ handleChange }
                    name={ timeUnits.MINUTES }
                    placeholder="Minutes"
                    min="0"
                    max="60"
                />
                <input type="number" 
                    onChange={ handleChange }
                    name={ timeUnits.SECONDS }
                    placeholder="Seconds"
                    min="0"
                    max="60"
                />
            </label>
            <select
                name={ raceForm.RACE_ID }
                onChange={ handleChange }
                value={ race.id }
            >
                {raceConfig.races.map((race) =>
                    <option value={ race.id } key={ race.id } >
                        { race.name }
                    </option>
                )}
            </select>
            <input
                type="radio"
                id={ raceUnits.MILES }
                name={ raceForm.RACE_UNIT }
                onChange={ handleChange }
                value={ raceUnits.MILES }
                checked={ raceUnit === raceUnits.MILES }
            />
            <label htmlFor={ raceUnits.MILES }>Miles</label>
            <input
                type="radio"
                id={ raceUnits.KM }
                name={ raceForm.RACE_UNIT }
                onChange={ handleChange }
                value={ raceUnits.KM }
                checked={ raceUnit === raceUnits.KM }
            />
            <label htmlFor={ raceUnits.KM }>KM</label>
            <input type="submit" value="Submit" />
        </form>
    );
}

RaceForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    raceUnit: PropTypes.string.isRequired,
    raceId: PropTypes.string.isRequired
};

export default RaceForm;