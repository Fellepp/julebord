import { combineReducers } from 'redux'
import counterReducer from './counter'
import timeStateReducer from './timerState'
import PlayerConfigReducer from './playerConfig'
import GameConfigReducer from './gameConfig'
import ThemeReducer from './themeReducer'

const rootReducer = combineReducers({
    timer: counterReducer,
    timeState: timeStateReducer,
    playerState: PlayerConfigReducer,
    config: GameConfigReducer,
    theme: ThemeReducer
})

export default rootReducer