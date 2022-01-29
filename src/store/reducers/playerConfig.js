import { SETPLAYERS } from '../constants'

const initConfig = {
    // "Filip": {},
    // "Helena": {},
    // "Petter": {},
    // "Alina": {},
    // "Tommy": {},
    // "Andrea": {},
    // "Mathias": {},
    // "Haakon": {},
    // "Wilhelm": {},
    // "Herman": {},
    // "Jesper": {},
    // "Gard": {}
    // "Richard": {},
    // "Nhu": {},
    "Team Vegans": {},
    "Team Flat Earthers": {},
    "Team Anti Vaxxers": {},
    "Team Anti-5g": {},
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