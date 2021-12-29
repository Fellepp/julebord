import React, { useState } from 'react'
import './navbar.css'
import { useSelector, useDispatch } from 'react-redux'
import { setTimeStateGlobally } from '../../store/actions/timerStateActions'
import Player from '../audioPlayer/audioPlayer'
import Intensity from '../intensity/Intensity'
import { setTheme } from '../../store/actions/themeActions'

const NavBar = () => {
    const TITLE = "SWINKYSWONKY HVA GÅR I NEBBET???"
    const INTENSITY = "Dritafaktor"
    const THEMES = "Bytt tema"
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false);

    const screenWidth = document.documentElement.clientWidth
    const screenHeight = document.documentElement.clientHeight
    const navHeight = screenHeight / 10;
    const titleWidth = screenWidth / 2
    const settingsWith = screenWidth / 4


    const [mins, secs] = useSelector(state => [
        state.timer[0],
        state.timer[1]
    ])
    const theme = useSelector(state => state.theme)
    const mainColor = theme.colors.main
    const secondaryColor = theme.colors.secondary

    const handleTimerButtons = (action) => {
        if (action === "s") {
            dispatch(setTimeStateGlobally({
                pause: false,
                reset: false
            }))
        }
        else if (action === "p") {
            dispatch(setTimeStateGlobally({
                pause: true,
                reset: false
            }))
        }
        else if (action === "r") {
            dispatch(setTimeStateGlobally({
                pause: true,
                reset: true
            }))
        }
    }

    const togglePopup = () => {
        setIsOpen(!isOpen)
    }

    const themeOrder = ["dk", "rm"]
    const allThemes = {
        dk: {
            name: "dk",
            colors: {
                main: "#753513",
                secondary: "#F8C477",
                misc: "#EA0000",
            },
            path: "./images/DK/"
        },
        rm: {
            name: "rm",
            colors: {
                main: "#97ce4c",
                secondary: "#e89ac7",
                misc: "#f0e14a",
            },
            path: "./images/rickandmorty/"
        }
    }

    const getNextTheme = () => {
        const index = themeOrder.indexOf(theme.name)
        let nextTheme = ""
        if (themeOrder.length - 1 > index) {
            nextTheme = themeOrder[index + 1]
        }
        else {
            nextTheme = themeOrder[0]
        }

        Object.entries(allThemes).map(([keys, values]) => {
            if (keys === nextTheme) {
                dispatch(setTheme({ ...values }))
                return
            }
        })
    }

    return (
        <div>
            <nav>
                <div className="nav-wrapper" style={{ backgroundColor: `${mainColor}`, borderLine: "outset" }}>
                    <a className="brand-logo center" style={{ 
                        width: `50vw`, maxHeight: "10vh",
                        textAlign: "center",
                        margin: "0",
                        display: "inline-block",
                        verticalAlign: "middle",
                        lineHeight: "normal"
                        }}><div className="TitleText">
                        <img className="titleLogo" src={`./images/logo/nebbet_transparent.png`} />
                        {TITLE}
                        <img className="titleLogo" src={`./images/logo/nebbet_transparent.png`} style={{ WebkitTransform: "scaleX(-1)", transform: "scaleX(-1)" }} />
                    </div></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li className="NavBarText buttonIcon" onClick={togglePopup}>{INTENSITY}</li>
                        <li className="NavBarText buttonIcon" onClick={getNextTheme}>{THEMES}</li>
                    </ul>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li className="NavBarText">{`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</li>
                        <li className="NavBarText">
                            <i className="material-icons left buttonIcon" onClick={() => { handleTimerButtons("r") }}>restore</i>
                            <i className="material-icons left buttonIcon" onClick={() => { handleTimerButtons("s") }}>timer</i>
                            <i className="material-icons left buttonIcon" onClick={() => { handleTimerButtons("p") }}>timer_off</i>
                        </li>
                        <li className="NavBarText"><Player /></li>
                    </ul>
                </div>
            </nav>
            {isOpen && <Intensity
                handleClose={togglePopup}
            />}
        </div>
    )
}

export default NavBar


