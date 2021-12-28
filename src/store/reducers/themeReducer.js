import { SETTHEME } from '../constants'

const initConfig = {
    colors: {
        main: "#753513", 
        secondary : "#F8C477",
        misc: "#EA0000",
        shadow: "black",
    },
    path: "./images/DK/"
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