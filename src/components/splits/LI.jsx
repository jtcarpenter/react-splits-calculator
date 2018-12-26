import React from 'react';
import styled from 'styled-components';

const StyledLI = styled.li`
    display: block;
    height: 9.5mm;
    position: relative;
    &:first-child {
        height: 9mm;
        border-top: .5mm solid black;
    }
`;

const LI = (...args) => (
    <StyledLI { ...args[0] }>
    </StyledLI>
);

export default LI;