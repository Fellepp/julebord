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
    const settingsWidth = screenWidth / 4
    const titleFontSize = Math.min(navHeight / 3, titleWidth / 1)
    const imageSize = titleFontSize + 20
    const paddingTopNav = navHeight / 5
    const navFontSize = settingsWidth / 15
    const iconSize = navFontSize / 2


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

    const themeOrder = ["new", "dk", "rm", "trump", "snoop", "shrek", "pokemon", "com", "thom"]
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
        },
        trump: {
            name: "trump",
            colors: {
                main: "#002868",
                secondary: "#bf0a30",
                misc: "#ffffff",
            },
            path: "./images/trump/"
        },  
        com: {
            name: "com",
            colors: {
                main: "#000000",
                secondary: "#faf333",
                misc: "#faf333",
            },
            path: "./images/com/"
        },  
        thom: {
            name: "thom",
            colors: {
                main: "#045474",
                secondary: "#DC2C1C",
                misc: "#C4C4CC",
            },
            path: "./images/thomas/"
        },  
        shrek: {
            name: "shrek",
            colors: {
                main: "#7a9244",
                secondary: "#5c452d",
                misc: "#e1dfb6",
            },
            path: "./images/shrek/"
        },  
        pokemon: {
            name: "pokemon",
            colors: {
                main: "#0075BE",
                secondary: "#FFCC00",
                misc: "#FFCC00",
            },
            path: "./images/pokemon/"
        }, 
        snoop: {
            name: "snoop",
            colors: {
                main: "#676031",
                secondary: "#31a335",
                misc: "#b6d5ca",
            },
            path: "./images/snoop/"
        }, 
        new: {
            name: "new",
            colors: {
                main: "#BB2528",
                secondary: "#165B33",
                misc: "#F8B229",
            },
            path: "./images/new/"
        }, 
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
            <nav style={{ height: "10vh" }}>
                {console.log(paddingTopNav)}
                <div className="nav-wrapper" style={{ backgroundColor: `${mainColor}`, borderLine: "outset" }}>
                    <a className="brand-logo center" style={{ paddingTop: `${paddingTopNav}px`, width: `50vw`, maxHeight: "10vh", fontSize: `${titleFontSize}px` }}><div className="TitleText">
                        <img className="titleLogo" style={{ width: `${imageSize}px`, height: `${imageSize}px` }} src={`./images/logo/nebbet_transparent.png`} />
                        {TITLE}
                        <img className="titleLogo" src={`./images/logo/nebbet_transparent.png`} style={{ WebkitTransform: "scaleX(-1)", transform: "scaleX(-1)", width: `${imageSize}px`, height: `${imageSize}px` }} />
                    </div></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down" style={{ width: `${settingsWidth}px`, fontSize: `${navFontSize}px`, paddingTop: `${paddingTopNav}px` }}>
                        <li className="NavBarText buttonIcon" onClick={togglePopup}>{INTENSITY}</li>
                        <li className="NavBarText buttonIcon" onClick={getNextTheme}>{THEMES}</li>
                    </ul>
                    <ul id="nav-mobile" className="left hide-on-med-and-down" style={{ width: `${settingsWidth}px`, fontSize: `${navFontSize}px`, paddingTop: `${paddingTopNav}px` }}>
                        <li className="NavBarText">{`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</li>
                        <li className="NavBarText">
                            <i className="material-icons left buttonIcon" style={{ width: `${iconSize}px`, height: `${iconSize}px` }} onClick={() => { handleTimerButtons("r") }}>restore</i>
                            <i className="material-icons left buttonIcon" style={{ width: `${iconSize}px`, height: `${iconSize}px` }} onClick={() => { handleTimerButtons("s") }}>timer</i>
                            <i className="material-icons left buttonIcon" style={{ width: `${iconSize}px`, height: `${iconSize}px` }} onClick={() => { handleTimerButtons("p") }}>timer_off</i>
                        </li>
                        <li className="NavBarText" ><Player /></li>
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


