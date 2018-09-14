import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import RaceForm from './RaceForm.jsx';

export class RaceFormContainer extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            totalSeconds: 0,
            race: 'marathon'
        };
        this.handleHoursChange = this.handleHoursChange.bind(this);
        this.handleMinutesChange = this.handleMinutesChange.bind(this);
        this.handleSecondsChange = this.handleSecondsChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRaceChange = this.handleRaceChange.bind(this);
        this.getSplits = this.getSplits.bind(this);
    }

    getSplits(race, time) {
        let totalSeconds =  (this.state.hours * 3600) +
                            (this.state.minutes * 60) +
                            (this.state.seconds);
        this.setState({ totalSeconds });
    }

    handleHoursChange(evt) {
        this.setState({ hours: parseInt(evt.target.value, 10) });
    }

    handleMinutesChange(evt) {
        this.setState({ minutes: parseInt(evt.target.value, 10) });
    }

    handleSecondsChange(evt) {
        this.setState({ seconds: parseInt(evt.target.value, 10) });
    }

    handleRaceChange(evt) {
        this.setState({ race: evt.target.value });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.getSplits();
    }

    render() {
        return (
            <RaceForm
                handleSubmit={ this.handleSubmit }
                handleHoursChange={ this.handleHoursChange }
                handleMinutesChange={ this.handleMinutesChange }
                handleSecondsChange={ this.handleSecondsChange }
                handleRaceChange={ this.handleRaceChange }
            >
            </RaceForm>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

RaceFormContainer.propTypes = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RaceFormContainer);