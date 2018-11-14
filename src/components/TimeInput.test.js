import React from 'react';
import { shallow, mount } from 'enzyme';
import { TimeInput } from './TimeInput';

import renderer from 'react-test-renderer';

const timeInput = (
    <TimeInput onChange={() => {}}/>
);

describe('TimeInput', () => {

    let wrapper;
    let shallowWrapper;
    let hourInput;
    let minuteInput;
    let secondInput;

    beforeEach(() => {
        wrapper = mount(timeInput);
        shallowWrapper = shallow(timeInput);
        hourInput = wrapper.find('input#hour');
        minuteInput = wrapper.find('input#minute');
        secondInput = wrapper.find('input#second');
    });

    afterEach(() => {
        document.activeElement.blur();
    });

    it('should render', () => {
        expect(shallowWrapper.exists()).toBe(true);
    });

    it('should display correctly', () => {
        expect(renderer.create(timeInput).toJSON()).toMatchSnapshot();
    });

    it('should update hour state to 1 when input changes to 1', () => {
        expect(wrapper.state('hour')).toBe('');
        hourInput.simulate('change', { target: { value: '1' } });
        expect(wrapper.state('hour')).toBe('1');
    });

    it('should move focus to minutes when hour is 1 character long', () => {
        hourInput.simulate('change', { target: { value: '1' } });
        const focusedElement = document.activeElement;
        expect(focusedElement.id).toEqual(minuteInput.props().id);
    });

    it('should move focus to seconds when miutes is 2 characters long', () => {
        minuteInput.simulate('change', { target: { value: '11' } });
        const focusedElement = document.activeElement;
        expect(focusedElement.id).toEqual(secondInput.props().id);
    });

    it('should update seconds state to empty after deleting', () => {
        secondInput.simulate('change', { target: { value: '1' } });
        expect(wrapper.state('second')).toBe('1');
        secondInput.simulate('change', { target: { value: '' } });
        expect(wrapper.state('second')).toBe('');
    });

    it('should update minute state to empty after deleting', () => {
        minuteInput.simulate('change', { target: { value: '1' } });
        expect(wrapper.state('minute')).toBe('1');
        minuteInput.simulate('change', { target: { value: '' } });
        expect(wrapper.state('minute')).toBe('');
    });

    it('should update hour state to empty after deleting', () => {
        hourInput.simulate('change', { target: { value: '1' } });
        expect(wrapper.state('hour')).toBe('1');
        hourInput.simulate('change', { target: { value: '' } });
        expect(wrapper.state('hour')).toBe('');
    });

    it('should move focus to minutes if seconds is empty after delete', () => {
        secondInput.simulate('change', { target: { value: '1' } });
        expect(wrapper.state('second')).toBe('1');
        secondInput.simulate('change', { target: { value: '' } });
        const focusedElement = document.activeElement;
        expect(focusedElement.id).toEqual(minuteInput.props().id);
    });

    it('should move focus to hours if minutes is empty after delete', () => {
        minuteInput.simulate('change', { target: { value: '1' } });
        expect(wrapper.state('minute')).toBe('1');
        minuteInput.simulate('change', { target: { value: '' } });
        const focusedElement = document.activeElement;
        expect(focusedElement.id).toEqual(hourInput.props().id);
    });
});