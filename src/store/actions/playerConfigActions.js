import { SET } from '../constants'

export function setTimeGlobally(payload) {
    return {
        type: SET,
        payload
    }
}