import React from 'react';
import styled from 'styled-components';
import { media } from 'helpers/styleHelper';

const StyledTable = styled.table`
    page-break-inside: avoid;
    table-layout:fixed
    margin: 0;
    padding: 0;
    border-collapse: collapse;
    border-spacing: 0;
    border:
        ${(props) => props.printBorderWidth}px
        dashed
        ${(props) => props.theme.PRIMARY};
    float: left;

    @media print {
        border-width: ${(props) => props.printBorderWidth}mm;
        border-color: ${(props) => props.theme.PRIMARY};
        margin: ${(props) => props.printMarginHeight}mm;
    }
    ${media.SMALL`
        
    `};
    ${media.MEDIUM`
        
    `};
    ${media.LARGE`
        
    `};
    ${media.XLARGE`
        
    `};
`;

const Table = (...args) => (
    <StyledTable { ...args[0] }>
    </StyledTable>
);

export default Table;