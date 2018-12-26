import React from 'react';
import styled from 'styled-components';

const StyledTR = styled.tr`
    display: table-row;
    margin: 0;
    border-bottom:
        ${(props) => props.printBorderWidth}px
        solid
        ${(props) => props.theme.PRIMARY};

    &:last-child {
        border-bottom:
            ${(props) => props.printBorderWidth}px
            dashed
            ${(props) => props.theme.PRIMARY};
    };

    @media print {
        border-bottom-width: ${(props) => props.printBorderWidth}mm;
        border-color: ${(props) => props.theme.PRIMARY_DARK};
        height: ${(props) => { return props.printRowHeight; }}mm;
        font-size: ${(props) => { return props.printRowFontSize; }}mm;
        &:last-child {
            border-bottom:
                ${(props) => props.printBorderWidth}mm
                dashed
                ${(props) => props.theme.PRIMARY_DARK};
        }
    }
`;

const TR = (...args) => (
    <StyledTR { ...args[0] }>
    </StyledTR>
);

export default TR;