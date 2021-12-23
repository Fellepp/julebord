import React from 'react'
import { useSelector } from 'react-redux'
import './shotCounter.css'
import { useState, useEffect } from 'react'

const ShotCountdown = () => {
    const counterPadding = document.documentElement.clientHeight / 10

    const [minsG, secsG, shotSecs] = useSelector(state => [
        state.timer[0],
        state.timer[1],
        state.timer[2]
    ])

    return (
        <div className="shotCounter" style={{ top: `${counterPadding}px` }}>
            <p className="ShotText">{`${shotSecs.toString().padStart(2,)}`}</p>
        </div>

    )
}

export default ShotCountdown
