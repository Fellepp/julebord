import { SETTHEME } from '../constants'

const initConfig = {
    name: "covid",
    colors: {
        main: "#5482AB",
        secondary: "#F7E654",
        misc: "red",
    },
    path: "./images/covid/"
}

const ThemeReducer = (state = initConfig, action) => {
    switch (action.type) {
        case SETTHEME:
            let newTheme = Object.assign(state, {
                ...action.payload
            })
            return {
                ...state,
                ...newTheme
            }
        default:
            return state
    }

}

export default ThemeReducer