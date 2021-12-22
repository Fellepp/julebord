import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTimeGlobally } from '../../store/actions/counterActions'

const Counter = () => {
    const [minsG, secsG] = useSelector(state => [
        state.timer[0],
        state.timer[1]
    ])
    const dispatch = useDispatch();
    const { pause, reset } = useSelector(state => ({
        pause: state.timeState.pause,
        reset: state.timeState.reset
    }))

    const tick = () => {
        if (pause || reset) {
            if (reset) {
                dispatch(setTimeGlobally([15, 0]))
                return
            }
            return
        }
        if (secsG === 0) {
            dispatch(setTimeGlobally([minsG - 1, 59]))
        }
        else {
            dispatch(setTimeGlobally([minsG, secsG - 1]))
        }
    }

    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000)
        return () => clearInterval(timerId)
    })


    return (
        <div>
            {/* {console.log(minsG, secsG)} */}
        </div>
    )
}

export default Counter
