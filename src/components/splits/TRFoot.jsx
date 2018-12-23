import React from 'react';
import styled from 'styled-components';

const StyledTR = styled.tr`
    display: none;
    padding: 0;
    margin: 0;
    border: none;

    @media print {
        display: table-row;
        height: ${(props) => props.printTFootHeight}mm;
    }
`;

const TRFoot = (...args) => (
    <StyledTR { ...args[0] }>
    </StyledTR>
);

export default TRFoot;