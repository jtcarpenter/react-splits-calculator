import React from 'react';
import styled from 'styled-components';

const StyledTR = styled.tr`
    display: table-row;
    margin: 0;
    border-bottom:
        ${(props) => props.printBorderWidth}px
        solid
        ${(props) => props.theme.DIVIDER};

    &:last-child {
        border-bottom:
            ${(props) => props.printBorderWidth}px
            dashed
            ${(props) => props.theme.DIVIDER};
    };

    @media print {
        border-bottom-width: ${(props) => props.printBorderWidth}mm;
        height: ${(props) => { return props.printRowHeight; }}mm;
        font-size: ${(props) => { return props.printRowFontSize; }}mm;
        &:last-child {
            border-bottom:
                ${(props) => props.printBorderWidth}mm
                dashed
                ${(props) => props.theme.DIVIDER};
        }
    }
`;

const TR = (...args) => (
    <StyledTR { ...args[0] }>
    </StyledTR>
);

export default TR;