import React from 'react';
import styled from 'styled-components';

const StyledTD = styled.td`
    text-align: center;
    padding: 0 10px;
    margin: 0;
    line-height: 1;
    table-layout:fixed;
    color: ${(props) => props.theme.PRIMARY};
    &:first-child {
        padding-right: 5px;
    };
    &:last-child {
        padding-left: 5px;
        font-weight: bold;
    };

    @media print {
        padding: 0 2mm;
        color: ${(props) => props.theme.PRIMARY_DARK};
    }
`;

const TD = (...args) => (
    <StyledTD { ...args[0] }>
    </StyledTD>
);

export default TD;