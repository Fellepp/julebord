import { SET } from '../constants'

const initTimeState = [
    15, 0
]

const counterReducer = (state = initTimeState, action) => {
    switch (action.type) {
        case SET:
            let newTime = Object.assign(state, {
                ...action.payload
            })
            return {
                ...state,
                ...newTime
            }
        default:
            return {
                ...state
            }
    }

}

export default counterReducer