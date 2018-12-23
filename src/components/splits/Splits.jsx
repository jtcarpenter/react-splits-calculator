import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import raceConfig from '../../config/raceConfig';
import Table from './Table.jsx';
import TRHead from './TRHead.jsx';
import TR from './TR.jsx';
import TRFoot from './TRFoot.jsx';
import TH from './TH.jsx';
import TD from './TD.jsx';
import OL from './OL.jsx';
import LI from './LI.jsx';
import Span from './Span.jsx';

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
            <Table
                printBorderWidth={ PRINT_BORDER_WIDTH }
                printMarginHeight={ PRINT_MARGIN_HEIGHT }
            >
                <thead>
                    <TRHead
                        printRowHeight={ printRowHeight }
                        printRowFontSize={ printRowFontSize }
                        printBorderWidth={ PRINT_BORDER_WIDTH }
                    >
                        <TH>{ raceUnitName(raceUnit) }</TH>
                        <TH>Split</TH>
                    </TRHead>
                </thead>
                <tbody>
                    {splits.map((split, index) =>
                        <TR
                            key={ index }
                            printRowHeight= { printRowHeight }
                            printRowFontSize={ printRowFontSize }
                            printBorderWidth={ PRINT_BORDER_WIDTH }
                        >
                            <TD>
                                { parseSplitNumber(split, raceId, raceUnit) }
                            </TD>
                            <TD>
                                { parseSplit(split) }
                            </TD>
                        </TR>
                    )}
                </tbody>
                <tfoot>
                    <TRFoot printTFootHeight={ PRINT_TFOOT_HEIGHT }>
                        <TD colSpan="2"></TD>
                    </TRFoot>
                </tfoot>
            </Table>
            <OL printMarginHeight={ PRINT_MARGIN_HEIGHT }>
                {markers.map((mark, index) =>
                    <LI key={ index }>
                        <Span>{ mark }CM</Span>
                    </LI>
                )}
            </OL>
        </Fragment>
    );
}

Splits.propTypes = {
    splits: PropTypes.array.isRequired,
    raceUnit: PropTypes.string.isRequired,
    raceId: PropTypes.string.isRequired
};

export default Splits;