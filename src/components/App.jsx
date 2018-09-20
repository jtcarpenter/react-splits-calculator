import React, { Component, Fragment } from 'react';
import Counter from './counter/Counter.jsx';
import RaceForm from './RaceFormContainer.jsx';
import Splits from './SplitsContainer.jsx';

export class App extends Component {
    render() {
        return (
            <Fragment>
                <Counter></Counter>
                <RaceForm></RaceForm>
                <Splits></Splits>
            </Fragment>
        );
    }
}

export default App;