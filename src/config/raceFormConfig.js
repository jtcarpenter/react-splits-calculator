export const raceFormConfig = {
    hours: {
        name: 'hours'
    },
    minutes: {
        name: 'minutes'
    },
    seconds: {
        name: 'seconds'
    },
    race: {
        name: 'race',
        options: {
            marathon: {
                value: 'marathon',
                default: true
            },
            half: {
                value: 'half',
                default: false
            },
            tenKM: {
                value: 'tenKM',
                default: false
            },
            fiveKM: {
                value: 'fiveKM',
                default: false
            }
        }
    }
}

export default raceFormConfig;