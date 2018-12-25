import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    text-align: center;
`;

const Div = (...args) => (
    <StyledDiv { ...args[0] }>
    </StyledDiv>
);

export default Div;