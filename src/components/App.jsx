import React, { Component, Fragment } from 'react';
import RaceForm from './RaceFormContainer.jsx';
import Splits from './SplitsContainer.jsx';
import { injectGlobal, ThemeProvider } from 'styled-components';

const theme = {
    PRIMARY: '#000000',
    PRIMARY_DARK: '#000000',
    PRIMARY_LIGHT: '#efefef',
    DIVIDER: '#000000',
    ERROR_COLOUR: '#ea5a5a'
};

injectGlobal([`
    body {
        margin: 0;
        padding: 0;
        background-color: white;
        font-family:
            "HelveticaNeue-Light",
            "Helvetica Neue Light",
            "Helvetica Neue",
            Helvetica, Arial,
            "Lucida Grande",
            sans-serif;
        margin: 20px;
        @page {
            size: A4 portrait;
            margin: 0;
        }
    }
`]);

export class App extends Component {
    render() {
        return (
            <ThemeProvider theme={ theme }>
                <Fragment>
                    <RaceForm></RaceForm>
                    <Splits></Splits>
                </Fragment>
            </ThemeProvider>
        );
    }
}

export default App;