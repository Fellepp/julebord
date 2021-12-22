import React from 'react'
import { useSelector } from 'react-redux'
import './shotCounter.css'
import { useState, useEffect } from 'react'

const ShotCountdown = () => {
    const shotInterval = 60 //TODO ADD REDUX
    const counterPadding = document.documentElement.clientHeight / 3
    const [secs, setSecs] = useState(shotInterval)
    const { pause, reset } = useSelector(state => ({
        pause: state.timeState.pause,
        reset: state.timeState.reset
    }))

    const tick = () => {
        if (pause || reset) {
            if (reset) {
                setSecs(shotInterval)
                return
            }
            return
        }
        if (secs === 0) {
            setSecs(shotInterval)
        }
        else {
            setSecs(secs-1)
        }
    }

    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000)
        return () => clearInterval(timerId)
    })

    return (
        <div className="shotCounter" style={{ top: `${counterPadding}px` }}>
            {`${secs.toString().padStart(2,)}`}
        </div>
    )
}

export default ShotCountdown
