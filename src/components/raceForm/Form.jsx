import React from 'react';
import styled from 'styled-components';
import { media } from '../../helpers/styleHelper';

const StyledForm = styled.form`
    float: left;
    padding: 0 1rem;
    @media print {
        display: none;
    }
    ${media.SMALL`
        
    `};
    ${media.MEDIUM`
        
    `};
    ${media.LARGE`
        
    `};
    ${media.XLARGE`
        
    `};
`;

const Form = (...args) => (
    <StyledForm { ...args[0] }>
    </StyledForm>
);

export default Form;