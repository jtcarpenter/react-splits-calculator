import React from 'react';

export function RaceForm({
        handleSubmit,
        handleHoursChange,
        handleMinutesChange,
        handleSecondsChange,
        handleRaceChange
    }) {

    return (
        <form onSubmit={ handleSubmit }>
            <label>
                time:
                <input type="number" onChange={ handleHoursChange } name="hours" />
                <input type="text" onChange={ handleMinutesChange } name="miniutes" />
                <input type="text"  onChange={ handleSecondsChange } name="seconds" />
            </label>
            <select onChange={ handleRaceChange }>
                <option value="marathon">Marathon</option>
                <option value="half-marathon">Half Marathon</option>
                <option value="10k">10K</option>
                <option value="5k">5K</option>
            </select>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default RaceForm;