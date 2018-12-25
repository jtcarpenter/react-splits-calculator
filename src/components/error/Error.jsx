import React from 'react';
import PropTypes from 'prop-types';
import Div from 'components/error/Div.jsx';

export function Error({ errorMessage }) {
    return (
        <Div>{ errorMessage }</Div>
    );
}

Error.propTypes = {
    errorMessage: PropTypes.string.isRequired
};

export default Error;