import { SETTHEME } from '../constants'

export function setTheme(payload) {
    return {
        type: SETTHEME,
        payload
    }
}