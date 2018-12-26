import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    border: none;
    border-radius: 3px;
    padding: 10px 5px;
    text-align: center;
    width: 1.5em;
    outline: none;
    color: ${(props) => props.theme.PRIMARY};
`;

const Input = (...args) => (
    <StyledInput { ...args[0] }>
    </StyledInput>
);

export default Input;