import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import raceConfig from '../config/raceConfig';
import * as raceUnits from '../constants/raceUnits';
import * as raceForm from '../constants/raceForm';
import TimeInput from './TimeInput.jsx';

const StyledForm = styled.form`
    float: left;
    padding: 0 1rem;
    @media print {
        display: none;
    }
`;

const StyledFormElement = styled.div`
    margin: 0 0 1rem 0;
`;

const StyledRadioContainer = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
`;

const StyledSelect = styled.select`
    display: block;
    width: 100%;
    height: 2rem;
`;

const StyledSubmitInput = styled.input`
    width: 4rem;
    margin: 0 auto;
    display: block;
`;

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
        <StyledForm onSubmit={ handleSubmit }>
            <StyledFormElement>
                <TimeInput onChange={ handleTimeChange } />
            </StyledFormElement>
            <StyledFormElement>
                <StyledSelect
                    name={ raceForm.RACE_ID }
                    onChange={ handleChange }
                    value={ race.id }
                >
                    {raceConfig.races.map((race) =>
                        <option value={ race.id } key={ race.id } >
                            { race.name }
                        </option>
                    )}
                </StyledSelect>
            </StyledFormElement>
            <StyledFormElement>
                <StyledRadioContainer role="group">
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
                </StyledRadioContainer>
            </StyledFormElement>
            <StyledSubmitInput type="submit" value="Submit" />
        </StyledForm>
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