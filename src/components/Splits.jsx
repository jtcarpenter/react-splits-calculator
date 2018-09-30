import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import raceConfig from '../config/raceConfig';

const StyledTable = styled.table`
    background: ${(props) => props.theme.PRIMARY_LIGHT};
    margin: 0;
    padding: 0;
    border-collapse: collapse;
    border-spacing: 0;
`;

const StyledTR = styled.tr`
    border: 1px solid ${(props) => props.theme.DIVIDER};
`;

const StyledTD = styled.td`
    text-align: center;
    &:first-child {
        padding-right: 5px;
    };
    &:last-child {
        padding-left: 5px;
    };
`;

export function Splits({ splits, raceId, raceUnit }) {

    function parseSplit(split) {
        let time = split.time;
        const hours = `${Math.floor(time / (60*60))}`;
        time = time % (60*60);
        const minutes = `0${Math.floor(time / 60)}`.substr(-2, 2);
        time = time % 60;
        const secs = `0${Math.floor(time)}`.substr(-2, 2);
        return`${hours}:${minutes}:${secs}`;
    }

    function raceUnitName(raceUnitId) {
        const raceUnit =  raceConfig.raceUnits.find((raceUnit) => {
            return raceUnit.id === raceUnitId;
        });
        return raceUnit ? raceUnit.name : '';
    }

    function parseSplitNumber(split, raceId, raceUnit) {
        if (split.last) {
            return Math.round(raceConfig.races.find((raceUnit) => {
                return raceUnit.id === raceId;
            })[raceUnit] * 10) / 10;
        }
        return split.number;
    }

    return (
        <Fragment>
            <StyledTable>
                <thead>
                    <StyledTR>
                        <th>{ raceUnitName(raceUnit) }</th>
                        <th>Split</th>
                    </StyledTR>
                </thead>
                <tbody>
                    {splits.map((split, index) =>
                        <StyledTR key={ index }>
                            <StyledTD>
                                { parseSplitNumber(split, raceId, raceUnit) }
                            </StyledTD>
                            <StyledTD>
                                { parseSplit(split) }
                            </StyledTD>
                        </StyledTR>
                    )}
                </tbody>
                <tfoot>
                    <StyledTR>
                        <StyledTD colSpan="2">Attach here</StyledTD>
                    </StyledTR>
                </tfoot>
            </StyledTable>
        </Fragment>
    );
}

Splits.propTypes = {
    splits: PropTypes.array.isRequired,
    raceUnit: PropTypes.string.isRequired,
    raceId: PropTypes.string.isRequired
};

export default Splits;