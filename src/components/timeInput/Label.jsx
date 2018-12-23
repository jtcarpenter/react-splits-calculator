import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
    border: 1px solid #777777;
    padding: .5rem 1rem;
    border-radius: 5px;
    display: block;
`;

const Label = (...args) => (
    <StyledLabel { ...args[0] }>
    </StyledLabel>
);

export default Label;