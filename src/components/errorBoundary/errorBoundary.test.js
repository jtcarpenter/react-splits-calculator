import React from 'react';
import {shallow} from 'enzyme';
import ErrorBoundary from 'components/errorBoundary/ErrorBoundary';
import Error from 'components/error/Error.jsx';
import * as errorMessages from 'constants/errorMessages';

const errorBoundary = (
    <ErrorBoundary>
        <div></div>
    </ErrorBoundary>
);

describe('ErrorBoundary', () => {
    it('should render', () => {
        const wrapper = shallow(errorBoundary);
        expect(wrapper.exists()).toBe(true);
    });
});

describe('When an error is caught', () => {
    const wrapper = shallow(errorBoundary);
    wrapper.setState({hasError: true});
    it('should display correct error message', () => {
        const error = wrapper.find(Error);
        expect(error.prop('errorMessage')).toBe(errorMessages.ERROR_GENERAL);
    });
});