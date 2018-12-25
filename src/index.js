import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import appStore from 'store/appStore';
import RaceForm from 'components/raceForm/RaceFormContainer.jsx';
import Splits from 'components/splits/SplitsContainer.jsx';
import { injectGlobal, ThemeProvider } from 'styled-components';
import ErrorBoundary from 'components/errorBoundary/ErrorBoundary.jsx';

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

ReactDOM.render(
    <Provider store={appStore}>
        <ErrorBoundary>
            <ThemeProvider theme={ theme }>
                <Fragment>
                    <RaceForm></RaceForm>
                    <Splits></Splits>
                </Fragment>
            </ThemeProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('app')
);