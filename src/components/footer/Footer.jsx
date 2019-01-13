import React from 'react';
import styled from 'styled-components';
import { media } from 'helpers/styleHelper';

const StyledFooter = styled.footer`
    clear: both;
    display: flex;
    justify-content: center;
    padding-top: 1rem;
    ${media.MEDIUM`
        justify-content: left;
    `};
    @media print {
        display: none;
    }
`;

const Footer = (...args) => (
    <StyledFooter { ...args[0] }>
    </StyledFooter>
);

export default Footer;