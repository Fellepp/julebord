import { SETTIME, SETWEIGHTS } from '../constants'

const initConfig = {
    timeValues: [30, 0, 45],
    drinkingChoices: {
        fp: 0.1,
        beer: 0.5,
        vodka: 0.2,
        wine: 0.2
    }
}

const GameConfigReducer = (state = initConfig, action) => {
    switch (action.type) {
        case SETTIME:
            return state
        case SETWEIGHTS:
            return state
        default:
            return state
    }

}

export default GameConfigReducer