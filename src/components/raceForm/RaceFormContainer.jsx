import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaceForm from 'components/raceForm/RaceForm.jsx';
import { updateRace } from 'actions/raceActions';

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
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleRaceIdChange = this.handleRaceIdChange.bind(this);
        this.handleRaceUnitChange = this.handleRaceUnitChange.bind(this);
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

    handleTimeChange(time) {
        const hours = parseInt(time.hour, 10) || 0;
        const minutes = parseInt(time.minute, 10) || 0;
        const seconds = parseInt(time.second, 10) || 0;
        this.handleChange({
            ...this.state,
            hours,
            minutes,
            seconds
        });
    }

    handleRaceIdChange(evt) {
        this.handleChange({
            ...this.state,
            raceId: evt.target.value
        });
    }

    handleRaceUnitChange(evt) {
        this.handleChange({
            ...this.state,
            raceUnit: evt.target.value
        });
    }

    handleChange(params) {
        this.setState(params);
        this.raceUpdated(
            {
                hours: params.hours,
                minutes: params.minutes,
                seconds: params.seconds
            },
            params.raceId,
            params.raceUnit
        );
    }

    handleSubmit(evt) {
        evt.preventDefault();
    }

    render() {
        const { raceUnit, raceId } = this.props;
        return (
            <RaceForm
                handleSubmit={ this.handleSubmit }
                handleTimeChange={ this.handleTimeChange }
                handleRaceIdChange={ this.handleRaceIdChange }
                handleRaceUnitChange={ this.handleRaceUnitChange }
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