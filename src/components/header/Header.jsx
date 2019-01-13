import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header``;

const Header = (...args) => (
    <StyledHeader { ...args[0] }>
    </StyledHeader>
);

export default Header;