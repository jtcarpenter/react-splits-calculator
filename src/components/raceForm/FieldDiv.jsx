import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin: 0 0 1rem 0;
`;

const FieldDiv = (...args) => (
    <StyledDiv { ...args[0] }>
    </StyledDiv>
);

export default FieldDiv;