import React from 'react';
import styled from 'styled-components';
import { media } from 'helpers/styleHelper';

const StyledDiv = styled.div`
    clear: both;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    @media print {
        clear: none;
        display: block;
        margin-bottom: 0;
    }
    ${media.MEDIUM`
        clear: none;
        display: block;
        margin-bottom: 0;
    `};
`;

const Div = (...args) => (
    <StyledDiv { ...args[0] }>
    </StyledDiv>
);

export default Div;