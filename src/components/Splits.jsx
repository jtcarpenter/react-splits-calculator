import React from 'react';
import PropTypes from 'prop-types';

export function Splits({ splits }) {

    function parseSplit(split) {
        let time = split.time;
        const hours = `${Math.floor(time / (60*60))}`;
        time = time % (60*60);
        const minutes = `0${Math.floor(time / 60)}`.substr(-2, 2);
        time = time % 60;
        const secs = `0${Math.floor(time)}`.substr(-2, 2);
        const splitName = split.last ? 'Finish' : 'Split';
        return`${splitName} ${split.number} - ${hours}:${minutes}:${secs}`;
    }

    return (
        <ol>
            {splits.map((split, index) =>
                <li key={ index }>
                    { parseSplit(split) }
                </li>
            )}
        </ol>
    );
}

Splits.propTypes = {
    splits: PropTypes.array.isRequired
};

export default Splits;