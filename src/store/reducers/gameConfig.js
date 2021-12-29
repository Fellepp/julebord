import { SETCONFIG } from '../constants'

const initConfig = {
    timeValues: [10, 0, 45],
    drinkingChoices: {
        fp: 1,
        beer: 5,
        vodka: 2,
        wine: 2
    }
}

const GameConfigReducer = (state = initConfig, action) => {
    switch (action.type) {
        case SETCONFIG:
            let newTime = Object.assign(state, {
                ...action.payload
            })
            return {
                ...state,
                ...newTime
            }
        default:
            return state
    }

}

export default GameConfigReducer