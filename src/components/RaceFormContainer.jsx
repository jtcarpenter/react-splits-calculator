import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaceForm from './RaceForm.jsx';
import { updateRace } from '../actions/raceActions';
import * as timeUnits from '../constants/timeUnits';
import * as raceForm from '../constants/raceForm';

export class RaceFormContainer extends PureComponent {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            raceId: this.props.raceId,
            raceUnit: this.props.raceUnit
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.raceUpdated = this.raceUpdated.bind(this);
    }

    raceUpdated(time, raceId, raceUnit) {
        let totalSeconds =  (time.hours * 3600) +
                            (time.minutes * 60) +
                            (time.seconds);
        this.props.raceUpdated({
            totalSeconds,
            raceId,
            raceUnit
        });
    }

    handleChange(evt) {
        let hours = evt.target.name === timeUnits.HOURS
            ? parseInt(evt.target.value, 10)
            : this.state.hours;
        let minutes = evt.target.name === timeUnits.MINUTES
            ? parseInt(evt.target.value, 10)
            : this.state.minutes;
        let seconds = evt.target.name === timeUnits.SECONDS
            ? parseInt(evt.target.value, 10)
            : this.state.seconds;
        let raceId = evt.target.name === raceForm.RACE_ID
            ? evt.target.value
            : this.state.raceId;
        let raceUnit = evt.target.name === raceForm.RACE_UNIT
            ? evt.target.value
            : this.state.raceUnit;
        this.setState({
            hours,
            minutes,
            seconds,
            raceId,
            raceUnit
        });
        this.raceUpdated(
            {
                hours,
                minutes,
                seconds
            },
            raceId,
            raceUnit
        );
    }

    handleSubmit(evt) {
        evt.preventDefault();
        let hours = evt.target.name === timeUnits.HOURS
            ? parseInt(evt.target.hours.value, 10)
            : this.state.hours;
        let minutes = evt.target.name === timeUnits.MINUTES
            ? parseInt(evt.target.minutes.value, 10)
            : this.state.minutes;
        let seconds = evt.target.name === timeUnits.SECONDS
            ? parseInt(evt.target.seconds.value, 10)
            : this.state.seconds;
        let raceId = evt.target.name === raceForm.RACE_ID
            ? evt.target.race.value
            : this.state.raceId;
        let raceUnit = evt.target.name === raceForm.RACE_UNIT
            ? evt.target.raceUnit.value
            : this.state.raceUnit;
        this.setState({
            hours,
            minutes,
            seconds,
            raceId,
            raceUnit
        });
        this.raceUpdated(
            {
                hours,
                minutes,
                seconds
            },
            raceId,
            raceUnit
        );
    }

    render() {
        const { raceUnit, raceId } = this.props;
        return (
            <RaceForm
                handleSubmit={ this.handleSubmit }
                handleChange= { this.handleChange }
                raceUnit={ raceUnit }
                raceId= { raceId }
            >
            </RaceForm>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        totalSeconds: state.raceReducer.totalSeconds,
        raceId: state.raceReducer.raceId,
        raceUnit: state.raceReducer.raceUnit
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        raceUpdated: (payload) => {
            dispatch(updateRace(payload));
        }
    };
};

RaceFormContainer.propTypes = {
    raceId: PropTypes.string.isRequired,
    raceUpdated: PropTypes.func.isRequired,
    raceUnit: PropTypes.string.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RaceFormContainer);