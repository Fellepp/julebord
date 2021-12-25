import React from 'react'
import './navbar.css'
import { useSelector, useDispatch } from 'react-redux'
import { setTimeStateGlobally } from '../../store/actions/timerStateActions'
import Player from '../audioPlayer/audioPlayer'

const NavBar = () => {
    const TITLE = "SWINKYSWONKY HVA GÅR I NEBBET???"
    const INTENSITY = "Dritafaktor"
    const THEMES = "Prøv lykken"
    const dispatch = useDispatch()

    const [mins, secs] = useSelector(state => [
        state.timer[0],
        state.timer[1]
    ])

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

    return (
        <nav>
            <div className="nav-wrapper" style={{ borderLine: "outset" }}>
                <a className="brand-logo center"><h5 className="TitleText">
                    <img className="titleLogo" src={`./images/logo/nebbet_transparent.png`} />
                    {TITLE}
                    <img className="titleLogo" src={`./images/logo/nebbet_transparent.png`} style={{ WebkitTransform: "scaleX(-1)", transform: "scaleX(-1)" }} />
                </h5></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li className="NavBarText">{INTENSITY}</li>
                    <li className="NavBarText">{THEMES}</li>
                </ul>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li className="NavBarText">{`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</li>
                    <li className="NavBarText">
                        <i className="material-icons left" onClick={() => { handleTimerButtons("r") }}>restore</i>
                        <i className="material-icons left" onClick={() => { handleTimerButtons("s") }}>timer</i>
                        <i className="material-icons left" onClick={() => { handleTimerButtons("p") }}>timer_off</i>
                    </li>
                    <li className="NavBarText"><Player /></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar


