
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Error from 'components/error/Error.jsx';
import * as errorMessages from 'constants/errorMessages';

export default class ErrorBoundary extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    render() {
        if (this.state.hasError) {
            return <Error errorMessage={errorMessages.ERROR_GENERAL}/>;
        }
        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.object.isRequired
};