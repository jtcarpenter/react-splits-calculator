import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaceForm from './RaceForm.jsx';
import { updateRace } from '../actions/raceActions';
import raceFormConfig from '../config/raceFormConfig';

export class RaceFormContainer extends PureComponent {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            race: raceFormConfig.race.options.marathon.value
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.raceUpdated = this.raceUpdated.bind(this);
    }

    raceUpdated(time, race) {
        let totalSeconds =  (time.hours * 3600) +
                            (time.minutes * 60) +
                            (time.seconds);
        this.props.raceUpdated({
            totalSeconds,
            race
        });
    }

    handleChange(evt) {
        let hours = evt.target.name === raceFormConfig.hours.name
            ? parseInt(evt.target.value, 10)
            : this.state.hours
        let minutes = evt.target.name === raceFormConfig.minutes.name
            ? parseInt(evt.target.value, 10)
            : this.state.minutes
        let seconds = evt.target.name === raceFormConfig.seconds.name
            ? parseInt(evt.target.value, 10)
            : this.state.seconds
        let race = evt.target.name === raceFormConfig.race.name
            ? evt.target.value
            : this.state.race
        this.setState({
            hours,
            minutes,
            seconds,
            race
        });
        this.raceUpdated(
            {
                hours,
                minutes,
                seconds
            },
            race
        );
    }

    handleSubmit(evt) {
        evt.preventDefault();
        let hours = evt.target.name === raceFormConfig.hours.name
            ? parseInt(evt.target.hours.value, 10)
            : this.state.hours
        let minutes = evt.target.name === raceFormConfig.minutes.name
            ? parseInt(evt.target.minutes.value, 10)
            : this.state.minutes
        let seconds = evt.target.name === raceFormConfig.seconds.name
            ? parseInt(evt.target.seconds.value, 10)
            : this.state.seconds
        let race = evt.target.name === raceFormConfig.race.name
            ? evt.target.race.value
            : this.state.race
        this.setState({
            hours,
            minutes,
            seconds,
            race
        });
        this.raceUpdated(
            {
                hours,
                minutes,
                seconds
            },
            race
        );
    }

    render() {
        return (
            <RaceForm
                handleSubmit={ this.handleSubmit }
                handleChange= { this.handleChange }
            >
            </RaceForm>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        raceUpdated: (payload) => {
            dispatch(updateRace(payload));
        }
    };
};

RaceFormContainer.propTypes = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RaceFormContainer);