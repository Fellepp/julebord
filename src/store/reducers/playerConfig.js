import { SETPLAYERS } from '../constants'

const initConfig = {
    "Filip": {},
    "Helena": {},
    "Petter": {},
    "Alina": {},
    "Tommy": {},
    "Andrea": {},
    "Mathias": {},
    // "Haakon": {},
    // "Wilhelm": {},
    "Herman": {},
    "Jesper": {},
    "Gard": {}
    // "Richard": {},
    // "Nhu": {},
}

const PlayerConfigReducer = (state = initConfig, action) => {
    switch (action.type) {
        case SETPLAYERS:
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }

}

export default PlayerConfigReducer