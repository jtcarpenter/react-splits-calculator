import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Splits from './Splits.jsx';
import raceConfig from '../../config/raceConfig';

export class SplitsContainer extends PureComponent {

    constructor(props) {
        super(props);
        this.props = props;
        this.splitTime = this.splitTime.bind(this);
        this.makeSplits = this.makeSplits.bind(this);
    }

    splitTime(race, time, raceUnit) {
        return time / race[raceUnit];
    }

    makeSplits(race, splitTime, raceUnit, time) {
        const distance = race[raceUnit];
        const splits = [];
        for (let i = 1, l = Math.ceil(distance); i <= l; i++) {
            const split = { number: i, raceUnit };
            if (i === l) {
                split.time = time;
                split.last = true;
            } else {
                split.time = splitTime * i;
            }
            splits.push(split);
        }
        return splits;
    }

    render() {
        const { totalSeconds, raceId, raceUnit } = this.props;
        const race = raceConfig.races.find((race) => {
            return race.id === raceId;
        });
        const splitTime = this.splitTime(
            race,
            totalSeconds,
            raceUnit
        );
        const splits = this.makeSplits(
            race,
            splitTime,
            raceUnit,
            totalSeconds
        );
        return (
            <Splits
                splits={ splits }
                raceUnit={ raceUnit }
                raceId={ raceId }
            >
            </Splits>
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

const mapDispatchToProps = () => {
    return {};
};

SplitsContainer.propTypes = {
    totalSeconds: PropTypes.number.isRequired,
    raceId: PropTypes.string.isRequired,
    raceUnit: PropTypes.string.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SplitsContainer);