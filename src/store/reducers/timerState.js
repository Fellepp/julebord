import { SETSTATE } from '../constants'

const initTimeState = {
    pause: true,
    reset: true
}

const timeStateReducer = (state = initTimeState, action) => {
    switch (action.type) {
        case SETSTATE:
            let newState = Object.assign(state, {
                ...action.payload
            })
            return {
                ...state,
                ...newState
            }

        default:
            return {
                ...state
            }
    }

}

export default timeStateReducer