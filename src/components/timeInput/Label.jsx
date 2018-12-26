import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
    border: 1px solid ${(props) => props.theme.PRIMARY};
    padding: 0rem 1rem;
    border-radius: 5px;
    display: block;
    color: ${(props) => props.theme.PRIMARY};
`;

const Label = (...args) => (
    <StyledLabel { ...args[0] }>
    </StyledLabel>
);

export default Label;