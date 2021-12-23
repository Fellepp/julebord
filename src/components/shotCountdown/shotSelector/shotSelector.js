import React from 'react'
import { useSelector } from 'react-redux'

const ShotSelector = () => {
    const { timeValues, drinkingDict }  = useSelector(state => ({
        timeValues: state.config.timeValues,
        drinkingDict: state.config.drinkingChoices
    }))

    


    
    return (
        <div>
            {console.log(drinkingDict)}
            {console.log(timeValues)}
        </div>
    )
}

export default ShotSelector
