import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
    position: absolute;
    bottom: 0;
    border-bottom: .5mm solid ${(props) => props.theme.PRIMARY_DARK};
    color: ${(props) => props.theme.PRIMARY_DARK};
`;

const Span = (...args) => (
    <StyledSpan { ...args[0] }>
    </StyledSpan>
);

export default Span;