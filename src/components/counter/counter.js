import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTimeGlobally } from '../../store/actions/counterActions'

const Counter = () => {
    const [minsG, secsG, shotSecs] = useSelector(state => [
        state.timer[0],
        state.timer[1],
        state.timer[2]
    ])
    const dispatch = useDispatch();
    const { pause, reset } = useSelector(state => ({
        pause: state.timeState.pause,
        reset: state.timeState.reset
    }))

    const tick = () => {
        if (pause || reset) {
            if (reset) {
                dispatch(setTimeGlobally([15, 0, 45]))
                return
            }
            return
        }
        if (secsG === 0 || shotSecs === 0) {
            if (secsG === 0 && shotSecs === 0){
                dispatch(setTimeGlobally([minsG - 1, 59, 44]))
            }
            else if (secsG === 0){
                dispatch(setTimeGlobally([minsG - 1, 59, shotSecs - 1]))
            }
            else {
                dispatch(setTimeGlobally([minsG, secsG  - 1, 44]))
            }
        }
        else {
            dispatch(setTimeGlobally([minsG, secsG - 1, shotSecs - 1]))
        }
    }

    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000)
        return () => clearInterval(timerId)
    })


    return (
        <div>
        </div>
    )
}

export default Counter
