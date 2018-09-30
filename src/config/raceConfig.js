import * as raceIds from '../constants/raceIds';
import * as raceUnits from '../constants/raceUnits';

export const raceConfig = {
    races: [
        {
            id: raceIds.MARATHON,
            name: 'Marathon',
            [raceUnits.MILES]: 26.2187575,
            [raceUnits.KM]: 42.195
        },
        {
            id: raceIds.HALF_MARATHON,
            name: 'Half Marathon',
            [raceUnits.MILES]: 13.10937873,
            [raceUnits.KM]: 21.0975
        },
        {
            id: raceIds.TEN_KM,
            name: '10KM',
            [raceUnits.MILES]: 6.21371,
            [raceUnits.KM]: 10
        },
        {
            id: raceIds.FIVE_KM,
            name: '5KM',
            [raceUnits.MILES]: 3.10686,
            [raceUnits.KM]: 5
        }
    ],
    raceUnits: [
        {
            id: raceUnits.MILES,
            name: 'M'
        },
        {
            id: raceUnits.KM,
            name: 'KM'
        }
    ]
};

export default raceConfig;