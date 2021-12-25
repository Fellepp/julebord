import React from 'react'
import { useSelector } from 'react-redux'

const ShotSelector = () => {
    const { timeValues, drinkingDict } = useSelector(state => ({
        timeValues: state.config.timeValues,
        drinkingDict: state.config.drinkingChoices
    }))
    const playerDict = useSelector(state => state.playerState)
    const shotTimer = useSelector(state => state.timer[2])

    const shotRoulette = () => {
        const rwc = require("random-weighted-choice")
        var table = []
        Object.entries(drinkingDict).map(([keys, values]) => {
            table.push({ weight: values, id: keys })
        })

        Object.entries(playerDict).map(([keys, values]) => {
            let random = rwc(table)
            values['shotType'] = random
            if (values.hasOwnProperty(random)) {
                values[random] += 1
            }
            else {
                values[random] = 1
            }
        })
    }


    return (
        <div>
            {shotTimer === 31 ? shotRoulette() : null}
        </div>
    )
}

export default ShotSelector
