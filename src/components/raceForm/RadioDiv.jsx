import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme.PRIMARY};
`;

const RadioDiv = (...args) => (
    <StyledDiv { ...args[0] }>
    </StyledDiv>
);

export default RadioDiv;