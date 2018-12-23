import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
    display: block;
    width: 100%;
    height: 2rem;
`;

const Select = (...args) => (
    <StyledSelect { ...args[0] }>
    </StyledSelect>
);

export default Select;