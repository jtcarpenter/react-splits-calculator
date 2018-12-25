import React from 'react';
import { shallow, mount } from 'enzyme';
import { TimeInput, HOUR_ID, MINUTE_ID, SECOND_ID } from 'components/timeInput/TimeInput';

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
        hourInput = wrapper.find(`input#${HOUR_ID}`);
        minuteInput = wrapper.find(`input#${MINUTE_ID}`);
        secondInput = wrapper.find(`input#${SECOND_ID}`);
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
        const mockTarget = {
            value: '1',
            id: HOUR_ID,
            dataset: {}
        };
        expect(wrapper.state(HOUR_ID)).toBe('');
        hourInput.simulate('change', { target: mockTarget });
        expect(wrapper.state(HOUR_ID)).toBe('1');
    });

    it('should move focus to minutes when hour is 1 character long', () => {
        const mockTarget = {
            value: '1',
            id: HOUR_ID,
            dataset: { next: MINUTE_ID, maxLength: 1 }
        };
        hourInput.simulate('change', { target: mockTarget });
        const focusedElement = document.activeElement;
        expect(focusedElement.id).toEqual(minuteInput.props().id);
    });

    it('should move focus to seconds when minutes is 2 characters long', () => {
        const mockTarget = {
            value: '11',
            id: MINUTE_ID,
            dataset: { next: SECOND_ID, maxLength: 2 }
        };
        minuteInput.simulate('change', { target: mockTarget });
        const focusedElement = document.activeElement;
        expect(focusedElement.id).toEqual(secondInput.props().id);
    });

    it('should update seconds state to empty after deleting', () => {
        const mockTarget = {
            value: '1',
            id: SECOND_ID,
            dataset: {}
        };
        secondInput.simulate('change', { target: mockTarget });
        expect(wrapper.state(SECOND_ID)).toBe('1');
        secondInput.simulate('change', { target: { ...mockTarget, value: '' } });
        expect(wrapper.state(SECOND_ID)).toBe('');
    });

    it('should update minute state to empty after deleting', () => {
        const mockTarget = {
            value: '1',
            id: MINUTE_ID,
            dataset: {}
        };
        minuteInput.simulate('change', { target: mockTarget });
        expect(wrapper.state(MINUTE_ID)).toBe('1');
        minuteInput.simulate('change', { target: { ...mockTarget, value: '' } });
        expect(wrapper.state(MINUTE_ID)).toBe('');
    });

    it('should update hour state to empty after deleting', () => {
        const mockTarget = {
            value: '1',
            id: HOUR_ID,
            dataset: {}
        };
        hourInput.simulate('change', { target: mockTarget });
        expect(wrapper.state(HOUR_ID)).toBe('1');
        hourInput.simulate('change', { target: { ...mockTarget, value: '' } });
        expect(wrapper.state(HOUR_ID)).toBe('');
    });

    it('should move focus to minutes if seconds is empty after delete', () => {
        const mockTarget = {
            value: '1',
            id: SECOND_ID,
            dataset: { prev: MINUTE_ID }
        };
        secondInput.simulate('change', { target: mockTarget });
        expect(wrapper.state(SECOND_ID)).toBe('1');
        secondInput.simulate('change', { target: { ...mockTarget, value: '' } });
        const focusedElement = document.activeElement;
        expect(focusedElement.id).toEqual(minuteInput.props().id);
    });

    it('should move focus to hours if minutes is empty after delete', () => {
        const mockTarget = {
            value: '1',
            id: MINUTE_ID,
            dataset: { prev: HOUR_ID }
        };
        minuteInput.simulate('change', { target: mockTarget });
        expect(wrapper.state(MINUTE_ID)).toBe('1');
        minuteInput.simulate('change', { target: { ...mockTarget, value: '' } });
        const focusedElement = document.activeElement;
        expect(focusedElement.id).toEqual(hourInput.props().id);
    });

    it('should move focus to minutes on change if hour caret position equals max hour length', () => {
        const mockTarget = {
            value: '1',
            id: HOUR_ID,
            dataset: { next: MINUTE_ID, maxLength: 1 }
        };
        hourInput.simulate('change', { target: mockTarget });
        expect(wrapper.state(HOUR_ID).length).toEqual(1);
        hourInput.simulate('change', { target: { ...mockTarget, value: '11' } });
        const focusedElement = document.activeElement;
        expect(focusedElement.id).toEqual(minuteInput.props().id);
    });

    it('should move focus to seconds on change if minutes caret position equals max minute length', () => {
        const mockTarget = {
            value: '1',
            id: MINUTE_ID,
            dataset: { next: SECOND_ID, maxLength: 2 }
        };
        minuteInput.simulate('change', { target: mockTarget });
        minuteInput.simulate('change', { target: { ...mockTarget, value: '11' } });
        expect(wrapper.state(MINUTE_ID).length).toEqual(2);
        minuteInput.simulate('change', { target: { ...mockTarget, value: '111' } });
        const focusedElement = document.activeElement;
        expect(focusedElement.id).toEqual(secondInput.props().id);
    });
});