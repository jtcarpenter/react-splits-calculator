import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import raceConfig from '../config/raceConfig';

const A4_PAPER_LENGTH_MM = 297;
const PRINT_MARGIN_HEIGHT = 10;
const PRINT_THEAD_HEIGHT = 10;
const PRINT_TFOOT_HEIGHT = 100;
const PRINT_FONT_SIZE_SCALE = 0.65;

function printRowHeight(numSplits) {
    const marginOffset = (2 * PRINT_MARGIN_HEIGHT);
    const tableOffset = PRINT_THEAD_HEIGHT + PRINT_TFOOT_HEIGHT;
    const totalOffset = marginOffset + tableOffset;
    return (A4_PAPER_LENGTH_MM - totalOffset) / parseInt(numSplits, 10);
}

function printRowFontSize(printRowHeight) {
    return printRowHeight * PRINT_FONT_SIZE_SCALE;
}

const StyledTable = styled.table`
    background: ${(props) => props.theme.PRIMARY_LIGHT};
    margin: 0;
    padding: 0;
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px dashed ${(props) => props.theme.DIVIDER};
    @media print {
        margin: ${PRINT_MARGIN_HEIGHT}mm;
        float: left;
    }
`;

const StyledTHeadTR = styled.tr`
    display: table-row;
    border-bottom: 1px solid ${(props) => props.theme.DIVIDER};
    @media print {
        height: ${PRINT_THEAD_HEIGHT}mm;
    }
`;

const StyledTR = styled.tr`
    display: table-row;
    border-bottom: 1px solid ${(props) => props.theme.DIVIDER};
    &:last-child {
        border-bottom: 1px dashed ${(props) => props.theme.DIVIDER};
    };
    @media print {
        height: ${(props) => {
            return printRowHeight(props.numSplits);
        }}mm;
        &:last-child {
            border-bottom: 1px solid ${(props) => props.theme.DIVIDER};
        }
    }
`;

const StyledTFootTR = styled.tr`
    display: none;
    @media print {
        display: table-row;
        height: ${PRINT_TFOOT_HEIGHT}mm;
    }
`;

const StyledTD = styled.td`
    text-align: center;
    padding: 0 10px;
    @media print {
        font-size: ${(props) => {
            return printRowFontSize(printRowHeight(props.numSplits));
        }}mm;
        padding: 0 2mm;
    }
    &:first-child {
        padding-right: 5px;
    };
    &:last-child {
        padding-left: 5px;
    };
`;

const StyledP = styled.p`
    display: none;
    @media print {
        display: block;
        float: left;
        margin-top: ${PRINT_MARGIN_HEIGHT}mm;
    }
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
                    <StyledTHeadTR>
                        <th>{ raceUnitName(raceUnit) }</th>
                        <th>Split</th>
                    </StyledTHeadTR>
                </thead>
                <tbody>
                    {splits.map((split, index) =>
                        <StyledTR key={ index } numSplits={ splits.length }>
                            <StyledTD>
                                { parseSplitNumber(split, raceId, raceUnit) }
                            </StyledTD>
                            <StyledTD numSplits={ splits.length }>
                                { parseSplit(split) }
                            </StyledTD>
                        </StyledTR>
                    )}
                </tbody>
                <tfoot>
                    <StyledTFootTR>
                        <StyledTD colSpan="2"></StyledTD>
                    </StyledTFootTR>
                </tfoot>
            </StyledTable>
            <StyledP>Intructions...</StyledP>
        </Fragment>
    );
}

Splits.propTypes = {
    splits: PropTypes.array.isRequired,
    raceUnit: PropTypes.string.isRequired,
    raceId: PropTypes.string.isRequired
};

export default Splits;