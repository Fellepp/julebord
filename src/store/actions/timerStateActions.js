import { SETSTATE } from '../constants'

export function setTimeStateGlobally(payload) {
    return {
        type: SETSTATE,
        payload
    }
}