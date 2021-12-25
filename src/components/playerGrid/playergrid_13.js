import React from 'react'
import './playergrid_13.css';
import { useSelector } from 'react-redux'

const PlayerGrid_13 = () => {
    const imgHeight = 150;
    const imgWidth = 150;
    const playerDict = useSelector(state => state.playerState)
    const screenWidth = document.documentElement.clientWidth
    const playerGridWidth = 10 + imgWidth * Object.keys(playerDict).length
    const paddingLeft = (screenWidth - playerGridWidth) / 2
    const shotTimer = useSelector(state => state.timer[2])

    const loadPlayerImages = () => {
        Object.entries(playerDict).map(([keys, values]) => {
            return (
                values['playerImg'] = `./images/playerImages/${keys}.jpg`
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
                    <img className="imgBox" src={values['playerImg']} key={`${keys}_player`} height={imgHeight} width={imgWidth} alt="" onError={addDefaultSrc} />
                )
            })
        )
    }

    const loadDrinkingImages = () => {
        Object.entries(playerDict).map(([keys, values]) => {
            return (
                values['shotType'] === "beer" ? values['drinkingImg'] = `./images/drinkingImages/beer.jpg`
                    : values['shotType'] === "vodka" ? values['drinkingImg'] = `./images/drinkingImages/vodka.jpg`
                        : values['shotType'] === "wine" ? values['drinkingImg'] = `./images/drinkingImages/wine.jpg`
                            : values['shotType'] === "fp" ? values['drinkingImg'] = `./images/drinkingImages/free_pass.jpg`
                                : null
            )

        })
    }

    const drinkingImages = () => {
        loadDrinkingImages()
        return (
            Object.entries(playerDict).map(([keys, values]) => {
                return (
                    <img className="imgBox" src={values['drinkingImg']} key={`${keys}_drinking`} height={imgHeight} width={imgWidth} alt="" onError={addDefaultSrc} />
                )
            })
        )
    }

    const getNames = () => {
        return (
            Object.entries(playerDict).map(([keys, values]) => {
                return (
                    <div className="nameBox" key={`${keys}_name`} style={{ width: `${imgWidth}px` }}>{keys}</div>
                )
            })
        )
    }

    const getStats = () => {
        return (
            Object.entries(playerDict).map(([keys, values]) => {
                return (
                    <div>
                        <div className="statsBox" key={`${keys}_stats1`} style={{ fontSize: 13, width: `${imgWidth}px` }}>
                            <div style={{ width: "50%", float: "left" }}>{values['beer'] >= 0 ? `Øl: ${values['beer']}` : `Øl: 0`}</div>
                            <div style={{ width: "50%", float: "right" }}>{values['vodka'] >= 0 ? `Sprit: ${values['vodka']}` : `Sprit: 0`}</div>
                        </div>
                        <div className="statsBox" key={`${keys}_stats2`} style={{ fontSize: 13, width: `${imgWidth}px` }}>
                            <div style={{ width: "50%", float: "left" }}>{values['wine'] >= 0 ? `Vin: ${values['wine']}` : `Vin: 0`}</div>
                            <div style={{ width: "50%", float: "right" }}>{values['fp'] >= 0 ? `FP: ${values['fp']}` : `FP: 0`}</div>
                        </div>
                    </div>
                )
            })
        )
    }

    return (
        <div className="grid" style={{ left: `${paddingLeft}px` }}>
            <div className="row">
                {playerImages()}
            </div>
            <div className="nameRow">{getNames()}</div>
            <div className="row">
                {drinkingImages()}
            </div>
            <div className="nameRow">{getStats()}</div>
        </div>
    )
}

export default PlayerGrid_13
