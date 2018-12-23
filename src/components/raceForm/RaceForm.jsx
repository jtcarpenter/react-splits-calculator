import React from 'react';
import PropTypes from 'prop-types';
import raceConfig from '../../config/raceConfig';
import * as raceUnits from '../../constants/raceUnits';
import * as raceForm from '../../constants/raceForm';
import TimeInput from './../timeInput/TimeInput.jsx';
import Form from './Form.jsx';
import Select from './Select.jsx';
import FieldDiv from './FieldDiv.jsx';
import RadioDiv from './RadioDiv.jsx';
import Submit from './Submit.jsx';

export function RaceForm({
    handleSubmit,
    handleChange,
    handleTimeChange,
    raceUnit,
    raceId }) {

    const race = raceConfig.races.find((race) => {
        return race.id === raceId;
    });

    return (
        <Form onSubmit={ handleSubmit }>
            <FieldDiv>
                <TimeInput onChange={ handleTimeChange } />
            </FieldDiv>
            <FieldDiv>
                <Select
                    name={ raceForm.RACE_ID }
                    onChange={ handleChange }
                    value={ race.id }
                >
                    {raceConfig.races.map((race) =>
                        <option value={ race.id } key={ race.id } >
                            { race.name }
                        </option>
                    )}
                </Select>
            </FieldDiv>
            <FieldDiv>
                <RadioDiv role="group">
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
                </RadioDiv>
            </FieldDiv>
            <Submit type="submit" value="Submit" />
        </Form>
    );
}

RaceForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleTimeChange: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    raceUnit: PropTypes.string.isRequired,
    raceId: PropTypes.string.isRequired
};

export default RaceForm;