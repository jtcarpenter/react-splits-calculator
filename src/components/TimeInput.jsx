import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLabel = styled.label`
    border: 1px solid #777777;
    padding: 15px;
    border-radius: 5px;
`;

const StyledInput = styled.input`
    border: none;
    border-radius: 3px;
    padding: 10px 5px;
    text-align: center;
    width: 1.5em; // hour input will be less
    outline: none;
`;

const VALID_HOUR_REGEXP = /^$|^\d$/;
const VALID_MINUTE_REGEXP = /^([0-5]\d?)?$/;
const VALID_SECOND_REGEXP = VALID_MINUTE_REGEXP;
const MAX_HOUR_LENGTH = 1;
const MAX_MINUTE_LENGTH = 2;
const KEY_CODE_BACKSPACE = 8;

export class TimeInput extends PureComponent {

    constructor(props) {
        super(props);
        this.props = props;

        this.handleHourKeyPress = this.handleHourKeyPress.bind(this);
        this.handleHourChange = this.handleHourChange.bind(this);

        this.handleMinuteKeyDown = this.handleMinuteKeyDown.bind(this);
        this.handleMinuteKeyPress = this.handleMinuteKeyPress.bind(this);
        this.handleMinuteChange = this.handleMinuteChange.bind(this);

        this.handleSecondKeyDown = this.handleSecondKeyDown.bind(this);
        this.handleSecondChange = this.handleSecondChange.bind(this);

        this.state = {
            hour: '',
            minute: '',
            second: ''
        };
    }

    handleHourKeyPress(evt) {
        if (evt.target.selectionStart === MAX_HOUR_LENGTH) {
            this.minuteInput.focus();
        }
    }

    handleHourChange(evt) {
        let hour = evt.target.value;
        let valid = VALID_HOUR_REGEXP.test(hour);
        if (!valid) {
            evt.preventDefault();
            return;
        }
        this.setState({ hour });
        if (hour.length === MAX_HOUR_LENGTH) {
            this.minuteInput.focus();
        }
        this.props.onChange({
            hour,
            minute: this.state.minute,
            second: this.state.second
        });
    }

    handleMinuteKeyDown(evt) {
        if (evt.keyCode === KEY_CODE_BACKSPACE) {
            if (this.state.minute.length === 0) {
                this.hourInput.focus();
                evt.preventDefault();
            }
        }
    }

    handleMinuteKeyPress(evt) {
        if (evt.target.selectionStart === MAX_MINUTE_LENGTH) {
            this.secondInput.focus();
        }
    }

    handleMinuteChange(evt) {
        let minute = evt.target.value;
        let valid = VALID_MINUTE_REGEXP.test(minute);
        if (!valid) {
            evt.preventDefault();
            return;
        }
        this.setState({ minute });
        if (minute.length === MAX_MINUTE_LENGTH) {
            this.secondInput.focus();
        }
        if (minute.length === 0) {
            this.hourInput.focus();
        }
        this.props.onChange({
            hour: this.state.hour,
            minute,
            second: this.state.second
        });
    }

    handleSecondKeyDown(evt) {
        if (evt.keyCode === KEY_CODE_BACKSPACE) {
            if (this.state.second.length === 0) {
                this.minuteInput.focus();
                evt.preventDefault();
            }
        }
    }

    handleSecondChange(evt) {
        let second = evt.target.value;
        let valid = VALID_SECOND_REGEXP.test(second);
        if (!valid) {
            evt.preventDefault();
            return;
        }
        this.setState({ second });
        if (second.length === 0) {
            this.minuteInput.focus();
        }
        this.props.onChange({
            hour: this.state.hour,
            minute: this.state.minute,
            second
        });
    }

    render() {
        return (
            <StyledLabel>
                time:
                <StyledInput
                    innerRef={(input) => { this.hourInput = input; }} 
                    type="string"
                    onKeyPress={ this.handleHourKeyPress }
                    onChange={ this.handleHourChange }
                    placeholder="0"
                    value={ this.state.hour }
                    name="hour"
                    id="hour"
                />
                :
                <StyledInput
                    innerRef={(input) => { this.minuteInput = input; }} 
                    type="text"
                    onKeyDown={ this.handleMinuteKeyDown }
                    onKeyPress={ this.handleMinuteKeyPress }
                    onChange={ this.handleMinuteChange }
                    placeholder="00"
                    value={ this.state.minute }
                    name="minute"
                    id="minute"
                />
                :
                <StyledInput
                    innerRef={(input) => { this.secondInput = input; }} 
                    type="text"
                    onKeyDown={ this.handleSecondKeyDown }
                    onChange={ this.handleSecondChange }
                    placeholder="00"
                    value={ this.state.second }
                    name="second"
                    id="second"
                />
            </StyledLabel>
        );
    }
}

TimeInput.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default TimeInput;