import {css} from 'styled-components';

export const breakpoints = {
    SMALL: 420,
    MEDIUM: 720,
    LARGE: 900,
    XLARGE: 1080
};

export const media = Object.assign(
    {},
    Object.keys(breakpoints)
        .reduce((accumulator, label) => {
            const emSize = breakpoints[label] / 16;
            accumulator[label] = (...args) => css`
                @media screen and (min-width: ${emSize}em) {
                    ${css(...args)}
                }
            `;
            return accumulator;
        }, {}
        ),
    {
        PORTRAIT: (...args) => css`
            @media screen and (orientation: portrait){
                ${css(...args)}
            }`,
        LANDSCAPE: (...args) => css`
            @media screen and (orientation: landscape) {
                ${css(...args)}
            }`
    }
);