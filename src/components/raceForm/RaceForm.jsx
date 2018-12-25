import React from 'react';
import PropTypes from 'prop-types';
import raceConfig from 'config/raceConfig';
import * as raceUnits from 'constants/raceUnits';
import * as raceForm from 'constants/raceForm';
import TimeInput from 'components/timeInput/TimeInput.jsx';
import Form from 'components/raceForm/Form.jsx';
import Select from 'components/raceForm/Select.jsx';
import FieldDiv from 'components/raceForm/FieldDiv.jsx';
import RadioDiv from 'components/raceForm/RadioDiv.jsx';
import Submit from 'components/raceForm/Submit.jsx';

export function RaceForm({
    handleSubmit,
    handleTimeChange,
    handleRaceIdChange,
    handleRaceUnitChange,
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
                    onChange={ handleRaceIdChange }
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
                        onChange={ handleRaceUnitChange }
                        value={ raceUnits.MILES }
                        checked={ raceUnit === raceUnits.MILES }
                    />
                    <label htmlFor={ raceUnits.MILES }>Miles</label>
                    <input
                        type="radio"
                        id={ raceUnits.KM }
                        name={ raceForm.RACE_UNIT }
                        onChange={ handleRaceUnitChange }
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
    handleRaceIdChange: PropTypes.func.isRequired,
    handleRaceUnitChange: PropTypes.func.isRequired,
    raceUnit: PropTypes.string.isRequired,
    raceId: PropTypes.string.isRequired
};

export default RaceForm;