import React from 'react'
import './playergrid_13.css';
import { useSelector } from 'react-redux'

const PlayerGrid_13 = () => {
    const imgHeight = 130;
    const imgWidth = 130;
    const playerDict = useSelector(state => state.playerState)
    const screenWidth = document.documentElement.clientWidth
    const playerGridWidth = 10+imgWidth*Object.keys(playerDict).length
    const paddingLeft = (screenWidth-playerGridWidth)/2

    const loadPlayerImages = () => {
        Object.entries(playerDict).map(([keys, values]) => {
            return (
                values.push(`./images/playerImages/${keys}.jpg`)
            )
        })
    }

    const addDefaultSrc = (ev) => {
        ev.target.src = './images/playerImages/Guest.jpg'
    }

    const playerImages = () => {
        loadPlayerImages()
        return (
            Object.entries(playerDict).map(([keys, values]) => {
                return (
                    <img className="imgBox" src={values[0]} key={`${keys}_player`} height={imgHeight} width={imgWidth} alt="" onError={addDefaultSrc} />
                )
            })
        )
    }

    const loadDrinkingImages = () => {
        Object.entries(playerDict).map(([keys, values]) => {
            return (
                values.push(`./images/drinkingImages/beer.jpg`)
            )
        })
    }

    const drinkingImages = () => {
        loadDrinkingImages()
        return (
            Object.entries(playerDict).map(([keys, values]) => {
                return (
                    <img className="imgBox" src={values[1]} key={`${keys}_drinking`} height={imgHeight} width={imgWidth} alt="" onError={addDefaultSrc} />
                )
            })
        )
    }

    const getNames = () => {
        return(
            Object.entries(playerDict).map(([keys, values]) => {
                return(
                    <div className="nameBox" key={`${keys}_name`} style={{width: `${imgWidth}px`}}>{keys}</div>
                )
            })
        )
    }

    return (
        <div className="grid" style={{left: `${paddingLeft}px`}}>
            <div className="row">
                {playerImages()}
            </div>
            <div className="nameRow">{getNames()}</div>
            <div className="row">
                {drinkingImages()}
            </div>
        </div>
    )
}

export default PlayerGrid_13
