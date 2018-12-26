import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    width: 4rem;
    margin: 0 auto;
    display: none;
`;

const Submit = (...args) => (
    <StyledInput { ...args[0] }>
    </StyledInput>
);

export default Submit;