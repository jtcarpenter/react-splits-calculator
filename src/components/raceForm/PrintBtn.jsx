import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
    border: 0;
    padding: .25rem 0;
    width: 1.25rem;
    outline: none;
    &:hover {
        cursor: pointer;
    }
`;

const handleClick = () => window.print();

const PrintBtn = (...args) => (
    <StyledBtn onClick={ handleClick } { ...args[0] }>
    </StyledBtn>
);

export default PrintBtn;