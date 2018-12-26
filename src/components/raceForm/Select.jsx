import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
    display: block;
    width: 100%;
    height: 2rem;
    border: 1px solid ${(props) => props.theme.PRIMARY};
    background-color: ${(props) => props.theme.PRIMARY_LIGHT};
    border-radius: 5px;
    color: ${(props) => props.theme.PRIMARY};
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding: 0rem 1rem;
`;

const Select = (...args) => (
    <StyledSelect { ...args[0] }>
    </StyledSelect>
);

export default Select;