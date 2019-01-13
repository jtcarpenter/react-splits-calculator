import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    clear: both;
    display: flex;
    justify-content: center;
`;

const Footer = (...args) => (
    <StyledFooter { ...args[0] }>
    </StyledFooter>
);

export default Footer;