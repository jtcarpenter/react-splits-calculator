import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import {Error} from 'components/error/Error';

const mockError = (
    <Error errorMessage="test error"/>
);

describe('Error', () => {
    it('should render', () => {
        const wrapper = shallow(mockError);
        expect(wrapper.exists()).toBe(true);
    });

    it('should display an error message', () => {
        const error = renderer.create(mockError);
        expect(error.toJSON()).toMatchSnapshot();
    });
});