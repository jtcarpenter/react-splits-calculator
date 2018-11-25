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

export const HOUR_ID = 'input-hour';
export const MINUTE_ID = 'input-minute';
export const SECOND_ID = 'input-second';

const VALID_REGEXP = {
    [HOUR_ID]: /^$|^\d$/,
    [MINUTE_ID]: /^([0-5]\d?)?$/,
    [SECOND_ID]: /^([0-5]\d?)?$/
};

const KEY_CODE_BACKSPACE = 8;

export class TimeInput extends PureComponent {

    constructor(props) {
        super(props);
        this.props = props;

        this.state = {
            [HOUR_ID]: '',
            [MINUTE_ID]: '',
            [SECOND_ID]: ''
        };

        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.inputs = [
            {
                id: HOUR_ID,
                next: MINUTE_ID,
                el: null,
                placeholder: '0',
                maxLength: 1
            },
            {
                id: MINUTE_ID,
                prev: HOUR_ID,
                next: SECOND_ID,
                el: null,
                placeholder: '00',
                maxLength: 2
            },
            {
                id: SECOND_ID,
                prev: MINUTE_ID,
                el: null,
                placeholder: '00',
                maxLength: 2
            }
        ];
    }

    handleKeyDown(evt) {
        const { keyCode, target } = evt;
        const { dataset = {}, id } = target;
        const { prev } = dataset;
        if (prev && keyCode === KEY_CODE_BACKSPACE) {
            if (this.state[id].length === 0) {
                this.inputs.find((input) => input.id === prev).el.focus();
                evt.preventDefault();
            }
        }
    }

    handleKeyPress(evt) {
        const { target } = evt;
        const { dataset = {}, selectionStart } = target;
        const { next, maxLength } = dataset;
        if (next && selectionStart === maxLength) {
            this.inputs.find((input) => input.id === next).el.focus();
        }
    }

    handleChange(evt) {
        const { target } = evt;
        const { dataset = {}, id, value } = target;
        const { next, maxLength, prev } = dataset;
        const valid = VALID_REGEXP[id].test(value);
        if (!valid) {
            evt.preventDefault();
            return;
        }
        this.setState({ [id]: value });
        if (next && value.length === parseInt(maxLength, 10)) {
            this.inputs.find((input) => input.id === next).el.focus();
        }
        if (prev && value.length === 0) {
            this.inputs.find((input) => input.id === prev).el.focus();
        }
        this.props.onChange({
            hour: id === HOUR_ID ? value : this.state[HOUR_ID],
            minute: id === MINUTE_ID ? value : this.state[MINUTE_ID],
            second: id === SECOND_ID ? value : this.state[SECOND_ID]
        });
    }

    render() {
        return (
            <StyledLabel>
                time:
                {this.inputs.map((input, index) => 
                    <StyledInput
                        key={ index }
                        innerRef={ (el) => { input.el = el; } }
                        type="string"
                        onKeyDown={ this.handleKeyDown }
                        onKeyPress={ this.handleKeyPress }
                        onChange={ this.handleChange }
                        placeholder={ input.placeholder }
                        value={ this.state[input.id] }
                        name={ input.id }
                        id={ input.id }
                        data-prev={ input.prev }
                        data-next={ input.next }
                        data-max-length={ input.maxLength }
                    />
                )}
            </StyledLabel>
        );
    }
}

TimeInput.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default TimeInput;