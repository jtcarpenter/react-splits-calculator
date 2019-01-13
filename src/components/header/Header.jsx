import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    @media print {
        display: none;
    }
`;

const Header = (...args) => (
    <StyledHeader { ...args[0] }>
    </StyledHeader>
);

export default Header;