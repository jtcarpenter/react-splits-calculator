import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import raceConfig from '../config/raceConfig';

const A4_PAPER_LENGTH_MM = 297;
const PRINT_MARGIN_HEIGHT = 10;
const PRINT_THEAD_HEIGHT = 10;
const PRINT_FONT_SIZE_SCALE = 1;
const PRINT_BORDER_WIDTH = .5;
const PRINT_WRIST_SIZE = 150;
const MAX_PRINT_ROW_HEIGHT = 10;
const PRINT_TFOOT_HEIGHT =  A4_PAPER_LENGTH_MM -
                            PRINT_WRIST_SIZE -
                            PRINT_THEAD_HEIGHT -
                            (PRINT_MARGIN_HEIGHT * 2);

function resolvePrintRowHeight(numSplits) {
    const calculatedPrintRowHeight = (
        (PRINT_WRIST_SIZE - PRINT_THEAD_HEIGHT) / parseInt(numSplits + 1)
    );
    return calculatedPrintRowHeight < MAX_PRINT_ROW_HEIGHT
        ? calculatedPrintRowHeight
        : MAX_PRINT_ROW_HEIGHT;
}

function resolvePrintRowFontSize(resolvePrintRowHeight) {
    return resolvePrintRowHeight * PRINT_FONT_SIZE_SCALE;
}

const StyledTable = styled.table`
    page-break-inside: avoid;
    table-layout:fixed
    margin: 0;
    padding: 0;
    border-collapse: collapse;
    border-spacing: 0;
    border: ${PRINT_BORDER_WIDTH}px dashed ${(props) => props.theme.DIVIDER};
    float: left;

    @media print {
        border-width: ${PRINT_BORDER_WIDTH}mm;
        margin: ${PRINT_MARGIN_HEIGHT}mm;
    }
`;

const StyledTHeadTR = styled.tr`
    display: table-row;
    border-collapse: collapse;
    border-spacing: 0;
    margin: 0;
    border-bottom: ${PRINT_BORDER_WIDTH}px solid ${(props) => props.theme.DIVIDER};

    @media print {
        border-bottom-width: ${PRINT_BORDER_WIDTH}mm;
        height: ${(props) => { return props.printRowHeight; }}mm;
        font-size: ${(props) => { return props.printRowFontSize; }}mm;
    }
`;

const StyledTR = styled.tr`
    display: table-row;
    margin: 0;
    border-bottom: ${PRINT_BORDER_WIDTH}px solid ${(props) => props.theme.DIVIDER};

    &:last-child {
        border-bottom: ${PRINT_BORDER_WIDTH}px dashed ${(props) => props.theme.DIVIDER};
    };

    @media print {
        border-bottom-width: ${PRINT_BORDER_WIDTH}mm;
        height: ${(props) => { return props.printRowHeight; }}mm;
        font-size: ${(props) => { return props.printRowFontSize; }}mm;
        &:last-child {
            border-bottom: ${PRINT_BORDER_WIDTH}mm dashed ${(props) => props.theme.DIVIDER};
        }
    }
`;

const StyledTFootTR = styled.tr`
    display: none;
    padding: 0;
    margin: 0;
    border: none;

    @media print {
        display: table-row;
        height: ${PRINT_TFOOT_HEIGHT}mm;
    }
`;

const StyledTH = styled.th`
    line-height: 1;
`;

const StyledTD = styled.td`
    text-align: center;
    padding: 0 10px;
    margin: 0;
    line-height: 1;
    table-layout:fixed;

    &:first-child {
        padding-right: 5px;
    };
    &:last-child {
        padding-left: 5px;
        font-weight: bold;
    };

    @media print {
        padding: 0 2mm;
    }
`;

const StyledOl = styled.ul`
    display: none;
    list-style: none;
    padding: 0;
    margin: 0;
    float: left;

    @media print {
        display: block;
        margin-top: ${PRINT_MARGIN_HEIGHT}mm;
    }
`;

const StyledLi = styled.li`
    display: block;
    height: 9.5mm;
    position: relative;

    &:first-child {
        height: 9mm;
        border-top: .5mm solid black;
    }
`;

const StyledSpan = styled.span`
    position: absolute;
    bottom: 0;
    border-bottom: .5mm solid black;
`;

const StyledP = styled.p`
    display: block;
    float: left;
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

    const printRowHeight = resolvePrintRowHeight(splits.length);
    const printRowFontSize = resolvePrintRowFontSize(printRowHeight);
    const numMarkers = Math.floor((A4_PAPER_LENGTH_MM - PRINT_MARGIN_HEIGHT) / 10);
    const markers = Array.apply(null, Array(numMarkers)).map((v, i) => i + 1);

    return (
        <Fragment>
            <StyledTable>
                <thead>
                    <StyledTHeadTR
                        printRowHeight={ printRowHeight }
                        printRowFontSize={ printRowFontSize }
                    >
                        <StyledTH>{ raceUnitName(raceUnit) }</StyledTH>
                        <StyledTH>Split</StyledTH>
                    </StyledTHeadTR>
                </thead>
                <tbody>
                    {splits.map((split, index) =>
                        <StyledTR
                            key={ index }
                            printRowHeight= { printRowHeight }
                            printRowFontSize={ printRowFontSize }
                        >
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
                    <StyledTFootTR>
                        <StyledTD colSpan="2"></StyledTD>
                    </StyledTFootTR>
                </tfoot>
            </StyledTable>
            <StyledOl>
                {markers.map((mark, index) =>
                    <StyledLi key={ index }>
                        <StyledSpan>{ mark }CM</StyledSpan>
                    </StyledLi>
                )}
            </StyledOl>
            <StyledP>Instructions</StyledP>
        </Fragment>
    );
}

Splits.propTypes = {
    splits: PropTypes.array.isRequired,
    raceUnit: PropTypes.string.isRequired,
    raceId: PropTypes.string.isRequired
};

export default Splits;