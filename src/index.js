import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import appStore from 'store/appStore';
import Header from 'components/header/Header.jsx';
import RaceForm from 'components/raceForm/RaceFormContainer.jsx';
import Footer from 'components/footer/Footer.jsx';
import FlatIconCredit from 'components/footer/FlatIconCredit.jsx';
import Splits from 'components/splits/SplitsContainer.jsx';
import { injectGlobal, ThemeProvider } from 'styled-components';
import ErrorBoundary from 'components/errorBoundary/ErrorBoundary.jsx';

const theme = {
    PRIMARY: '#555555',
    PRIMARY_DARK: '#000000',
    PRIMARY_LIGHT: '#ffffff'
};

injectGlobal([`
    body {
        margin: 0;
        padding: 0;
        background-color: ${theme.PRIMARY_LIGHT};
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
                    <Header></Header>
                    <RaceForm></RaceForm>
                    <Splits></Splits>
                    <Footer>
                        <FlatIconCredit />
                    </Footer>
                </Fragment>
            </ThemeProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('app')
);