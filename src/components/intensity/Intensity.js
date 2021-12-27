import React, { useState, useEffect } from 'react'
import './Intensity.css'
import { useSelector, useDispatch } from 'react-redux'
// import Background from '../../images/background.jpg'
import { setConfig } from '../../store/actions/gameConfigActions'
import { setTimeGlobally } from '../../store/actions/playerConfigActions'

const Intensity = (props) => {
    const TITLE = "Innstillinger"
    const option1 = "Total varighet for spillet"
    const option2 = "Shottefrekvens"
    const option3 = "Dritafaktor"
    const man = "...eller sett sannsynlighet selv"
    const types = "Må summeres til 10 (fp, beer, vodka, wine)"
    const errorMessage = "Pass på at du sender inn gyldig sannsynlighet-input"
    const { timeValues, drinkingDict } = useSelector(state => ({
        timeValues: state.config.timeValues,
        drinkingDict: state.config.drinkingChoices
    }))
    const dispatch = useDispatch()
    const [selected, setSelected] = useState({
        img1: "100",
        img2: "100%",
        img3: "30%"
    })
    const [totalTime, setTotalTime] = useState([15, 0])
    const [shotFreq, setShotFreq] = useState([45])
    const [weights, setWeights] = useState(drinkingDict)
    const [textValid, setTextValid] = useState(true)
    const [inputWeights, setInputWeights] = useState([])
    const [readyToSave, setReadyToSave] = useState(false)

    const handleClick = (id) => {
        if (id === 1) {
            setSelected({
                img1: "100",
                img2: "30%",
                img3: "30%"
            })
            setWeights({
                fp: 1,
                beer: 7,
                vodka: 1,
                wine: 1
            })
        }
        else if (id === 2) {
            setSelected({
                img1: "100",
                img2: "100%",
                img3: "30%"
            })
            setWeights({
                fp: 1,
                beer: 5,
                vodka: 2,
                wine: 2
            })
        }
        else if (id === 3) {
            setSelected({
                img1: "100",
                img2: "100%",
                img3: "100%"
            })
            setWeights({
                fp: 0,
                beer: 4,
                vodka: 3,
                wine: 3
            })
        } else {
            return
        }
    }

    const handleChangeTotalTime = (id) => {
        setTotalTime([id, 0])
    }

    const handleChangeShotFreq = (id) => {
        setShotFreq(id)
    }

    const placeHolderWeights = () => {
        const placeholderWeights = Object.entries(weights).map(([keys, values]) => {
            return (
                values
            )
        })
        return placeholderWeights
    }

    const handleTextInput = (input) => {
        setInputWeights(input)
    }

    const inputValidator = (input) => {
        setTextValid(true)
        const inputArray = input.split(',')
        if (inputArray.length !== 4) {
            console.log("Not 4 weights")
            setTextValid(false)
            return
        }
        const acceptable = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ","]
        for (var i = 0; i < input.length; i++) {
            if (acceptable.indexOf(input[i]) !== -1) {
                continue
            } else {
                setTextValid(false)
                console.log("Wrong input type")
                return
            }
        }

        const sum = inputArray
            .map(function (elt) { // assure the value can be converted into an integer
                return /^\d+$/.test(elt) ? parseInt(elt) : 0;
            })
            .reduce(function (a, b) { // sum all resulting numbers
                return a + b
            })

        if (sum !== 10) {
            setTextValid(false)
            console.log("Weights does not add to 10")
            return
        }
        setWeights({
            fp: parseInt(inputArray[0]),
            beer: parseInt(inputArray[1]),
            vodka: parseInt(inputArray[2]),
            wine: parseInt(inputArray[3])
        })
    }

    useEffect(() => {
        if (readyToSave) {
            setReadyToSave(false)
            if (textValid) {
                const newTimeValues = totalTime
                newTimeValues.push(shotFreq) //Combined times, dispatch next
                dispatch(setConfig({
                    timeValues: newTimeValues,
                    drinkingChoices: weights
                }))
                props.handleClose()
            }
        }
    }, [readyToSave])

    const saveChanges = () => {
        if (inputWeights.length > 0) {
            inputValidator(inputWeights)
        }
        setReadyToSave(true)
    }

    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                <nav className="popup-nav">
                    <a className="brand-logo center"><h5 className="TitleTextPopup">
                        {TITLE}</h5></a>
                </nav>

                <div className="row" style={{ paddingTop: "5%", maxWidth: "80%", display: "flex", alignItems: "center" }}>
                    <b style={{ position: "relative", left: "0%" }}>{option1}</b>
                    <div style={{ position: "relative", right: "-40%" }}>
                        <label>
                            <input className="with-gap" name="group1" type="radio" onClick={() => { handleChangeTotalTime(5) }} />
                            <span className="radio-button-text" style={{ paddingLeft: "25px", paddingRight: "10px" }}>5m</span>
                        </label>
                        <label>
                            <input className="with-gap" name="group1" type="radio" onClick={() => { handleChangeTotalTime(10) }} />
                            <span className="radio-button-text" style={{ paddingLeft: "25px", paddingRight: "10px" }}>10m</span>
                        </label>
                        <label>
                            <input className="with-gap" name="group1" type="radio" defaultChecked onClick={() => { handleChangeTotalTime(15) }} />
                            <span className="radio-button-text" style={{ paddingLeft: "25px", paddingRight: "10px" }}>15m</span>
                        </label>
                    </div>
                </div>
                <div className="row" style={{ paddingTop: "10%", maxWidth: "80%", display: "flex", alignItems: "center" }}>
                    <b style={{ position: "relative", left: "0%" }}>{option2}</b>
                    <div style={{ position: "relative", right: "-50%" }}>
                        <label>
                            <input className="with-gap" name="group2" type="radio" onClick={() => { handleChangeShotFreq(30) }} />
                            <span className="radio-button-text" style={{ paddingLeft: "25px", paddingRight: "10px" }}>30s</span>
                        </label>
                        <label>
                            <input className="with-gap" name="group2" type="radio" defaultChecked onClick={() => { handleChangeShotFreq(45) }} />
                            <span className="radio-button-text" style={{ paddingLeft: "25px", paddingRight: "10px" }}>45s</span>
                        </label>
                        <label>
                            <input className="with-gap" name="group2" type="radio" onClick={() => { handleChangeShotFreq(60) }} />
                            <span className="radio-button-text" style={{ paddingLeft: "25px", paddingRight: "10px" }}>60s</span>
                        </label>
                    </div>
                </div>
                <div className="row" style={{ paddingTop: "10%", maxWidth: "80%", display: "flex", alignItems: "center" }}>
                    <b style={{ position: "relative", left: "0%" }}>{option3}</b>
                    <div style={{ position: "relative", right: "-37%", maxWidth: "60%" }}>
                        <img className="popupImage" onClick={() => { handleClick(1) }} style={{ opacity: selected.img1 }} src={'./images/logo/beerGlass.png'} />
                        <img className="popupImage" onClick={() => { handleClick(2) }} style={{ opacity: selected.img2 }} src={'./images/logo/beerGlass.png'} />
                        <img className="popupImage" onClick={() => { handleClick(3) }} style={{ opacity: selected.img3 }} src={'./images/logo/beerGlass.png'} />
                    </div>
                </div>
                <div className="row" style={{ paddingLeft: "5%", paddingTop: "0%", maxWidth: "80%", display: "flex", alignItems: "center" }}>
                    <div style={{ position: "relative", left: "0%" }}>{man}</div>
                    <div style={{ position: "relative", right: "-28%" }}>
                        <div className="input-field">
                            <input className="textInput" placeholder={placeHolderWeights()} id="weights" type="text" onChange={(event) => { handleTextInput(event.target.value) }} />
                        </div>
                    </div>
                </div>
                <div className="row" style={{ paddingLeft: "5%", paddingTop: "0%", maxWidth: "80%", display: "flex", alignItems: "center" }}>
                    <div style={{ position: "relative", right: "-53%" }}>{types}
                    </div>
                </div>
                <button onClick={() => { saveChanges() }} style={{ marginTop: "5%", backgroundColor: "#753513" }} className="btn waves-effect waves-light" type="submit" name="action">Lagre endringer
                    <i className="material-icons right">send</i>
                </button>
                <div style={{ marginTop: "0%", color: "red" }} >{textValid ? <></> : errorMessage}</div>
            </div>
        </div>
    )
}

export default Intensity
