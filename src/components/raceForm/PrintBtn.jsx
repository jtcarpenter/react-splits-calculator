import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
    border: 0;
    width: 2rem;
`;

const handleClick = () => window.print();

const PrintBtn = (...args) => (
    <StyledBtn onClick={ handleClick } { ...args[0] }>
    </StyledBtn>
);

export default PrintBtn;