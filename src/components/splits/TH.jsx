import React from 'react';
import styled from 'styled-components';

const StyledTH = styled.th`
    line-height: 1;
`;

const TH = (...args) => (
    <StyledTH { ...args[0] }>
    </StyledTH>
);

export default TH;