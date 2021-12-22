import { combineReducers } from 'redux'
import counterReducer from './counter'
import timeStateReducer from './timerState'

const rootReducer = combineReducers({
    timer: counterReducer,
    timeState: timeStateReducer
})

export default rootReducer