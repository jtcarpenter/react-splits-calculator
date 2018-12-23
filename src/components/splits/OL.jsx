import React from 'react';
import styled from 'styled-components';

const StyledOL = styled.ol`
    display: none;
    list-style: none;
    padding: 0;
    margin: 0;
    float: left;

    @media print {
        display: block;
        margin-top: ${(props) => { return props.printMarginHeight; }}mm;
    }
`;

const OL = (...args) => (
    <StyledOL { ...args[0] }>
    </StyledOL>
);

export default OL;