import { combineReducers } from 'redux'
import counterReducer from './counter'
import timeStateReducer from './timerState'
import PlayerConfigReducer from './playerConfig'
import GameConfigReducer from './gameConfig'

const rootReducer = combineReducers({
    timer: counterReducer,
    timeState: timeStateReducer,
    playerState: PlayerConfigReducer,
    config: GameConfigReducer
})

export default rootReducer