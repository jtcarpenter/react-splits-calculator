import React from 'react';
import styled from 'styled-components';

const StyledTR = styled.tr`
    display: table-row;
    border-collapse: collapse;
    border-spacing: 0;
    margin: 0;
    border-bottom:
        ${(props) => props.printBorderWidth}px
        solid
        ${(props) => props.theme.DIVIDER};

    @media print {
        border-bottom-width: ${(props) => props.printBorderWidth}mm;
        height: ${(props) => { return props.printRowHeight; }}mm;
        font-size: ${(props) => { return props.printRowFontSize; }}mm;
    }
`;

const TRHead = (...args) => (
    <StyledTR { ...args[0] }>
    </StyledTR>
);

export default TRHead;