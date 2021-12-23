import { SETPLAYERS } from '../constants'

const initConfig = {
    "Filip": [],
    "Helena": [],
    "Petter": [],
    "Alina": [],
    "Tommy": [],
    "Andrea": [],
    "Mathias": [],
    "Haakon": [],
    "Wilhelm": [],
    "Herman": [],
    "Jesper": [],
    "Richard": [],
    "Nhu": [],
    // "Mona": [],
    // "Camilla": []
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