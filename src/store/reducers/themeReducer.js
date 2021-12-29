import { SETTHEME } from '../constants'

const initConfig = {
    name: "new",
    colors: {
        main: "#BB2528",
        secondary: "#165B33",
        misc: "#F8B229",
    },
    path: "./images/new/"
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