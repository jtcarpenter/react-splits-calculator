import React from 'react';
import styled from 'styled-components';

const StyledTH = styled.th`
    line-height: 1;
    color: ${(props) => props.theme.PRIMARY};
    @media print {
        color: ${(props) => props.theme.PRIMARY_DARK};
    }
`;

const TH = (...args) => (
    <StyledTH { ...args[0] }>
    </StyledTH>
);

export default TH;