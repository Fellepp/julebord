import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTimeGlobally } from '../../store/actions/counterActions'

import countdown from '../../audio/countdown.mp3'
import swinkyy from '../../audio/countdown.mp4'

const Counter = () => {
    const [mins, secs, shotSecs] = useSelector(state => [
        state.timer[0],
        state.timer[1],
        state.timer[2]
    ])
    const timeValues = useSelector(state => state.config.timeValues)
    const dispatch = useDispatch();
    const { pause, reset } = useSelector(state => ({
        pause: state.timeState.pause,
        reset: state.timeState.reset
    }))

    const cdAudio = new Audio(countdown)
    const swinky = new Audio(swinkyy)
    swinky.volume = 1
    cdAudio.volume = 0.7

    const tick = () => {
        if (pause || reset) {
            if (reset) {
                dispatch(setTimeGlobally(timeValues))
                return
            }
            return
        }
        if (shotSecs === 15) {
            cdAudio.play()
        }
        if (shotSecs === 2) {
            swinky.play()
        }


        if (secs === 0 && mins === 0) {
            dispatch(setTimeGlobally([0, 0, 0]))
            return
        }
        if (secs === 0 || shotSecs === 0) {
            if (secs === 0 && shotSecs === 0) {
                dispatch(setTimeGlobally([mins - 1, 59, timeValues[2] - 1]))
            }
            else if (secs === 0) {
                dispatch(setTimeGlobally([mins - 1, 59, shotSecs - 1]))
            }
            else {
                dispatch(setTimeGlobally([mins, secs - 1, timeValues[2] - 1]))
            }
        }
        else {
            dispatch(setTimeGlobally([mins, secs - 1, shotSecs - 1]))
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
