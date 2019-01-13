import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    font-size: .5rem;
`;

const FlatIconCredit = (...args) => (
    <StyledDiv { ...args[0] }>Icons made by
        <a
            href="https://www.freepik.com/"
            title="Freepik"
        > Freepik
        </a> from
        <a
            href="https://www.flaticon.com/"
            title="Flaticon"
        > www.flaticon.com
        </a> is licensed by
        <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            rel="noopener noreferrer"
            target="_blank"
        > CC 3.0 BY
        </a>
    </StyledDiv>
);

export default FlatIconCredit;