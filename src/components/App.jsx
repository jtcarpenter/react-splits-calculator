import React, { Component, Fragment } from 'react';
import Counter from './counter/Counter.jsx';
import RaceForm from './RaceFormContainer.jsx';

export class App extends Component {
    render() {
        return (
            <Fragment>
                <Counter></Counter>
                <RaceForm></RaceForm>
            </Fragment>
        );
    }
}

export default App;