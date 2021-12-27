import { SETCONFIG } from '../constants'

export function setConfig(payload) {
    return {
        type: SETCONFIG,
        payload
    }
}