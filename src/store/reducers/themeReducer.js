import { SETTHEME } from '../constants'

const initConfig = {
    name: "dk",
    colors: {
        main: "#753513", 
        secondary : "#F8C477",
        misc: "#EA0000",
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