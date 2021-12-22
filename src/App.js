import Haakon from './Haakon.jpg';
import Herman from './Herman.jpg';
import Filip from './Filip.jpg';
import Wilhelm from './Wilhelm.jpg';
import Mads from './Mads.jpg';
import './App.css';
import React, { UseState } from 'react';
import sound from './dk_rap.mp3'
import sound2 from './air_horn.mp3'
import sound3 from './hoho.mp3'
import sound4 from './countdown.mp3'
import santa from './santa.png'
import wof from './wof.png'
import beer from './beer.jpg'
import vodka from './vodka.jpg'
import fp from './free_pass.jpg'
import sound5 from './yoda.mp3'
import Snowfall from 'react-snowfall'
import sound6 from './easter_egg.mp3'
import simp from './simp.jpg'
import sound7 from './pipa.mp3'


import NavBar from './components/navbar/NavBar'
import Counter from './components/counter/counter'
import PlayerGrid_13 from './components/playerGrid/playergrid_13'
import ShotCounter from './components/shotCountdown/shotCountdown'

function App() {
  const minSecs = { minutes: 14, seconds: 59 }
  const audio = new Audio(sound)
  const audio2 = new Audio(sound2)
  const audio3 = new Audio(sound3)
  const audio4 = new Audio(sound4)
  const audio5 = new Audio(sound5)
  const audio6 = new Audio(sound6)
  const audio7 = new Audio(sound7)
  audio.volume = 0.2
  audio2.volume = 0.2
  audio3.volume = 0.2
  var drinkingChoises = [fp, beer, vodka]
  const { minutes = 0, seconds = 60 } = minSecs;
  const [[mins, secs], setTime] = React.useState([minutes, seconds]);
  const [drinkingDict, setDrinkingDict] = React.useState({
    "mads": "",
    "herman": "",
    "haakon": "",
    "filip": "",
    "wilhelm": ""
  })
  const [pause, setPause] = React.useState(true)
  const [reset, setReset] = React.useState(false)

  const tick = () => {
    if (pause || reset) {
      if (reset) {
        setTime([14, 59])
        return
      }
      return
    }
    if (mins === 0 && secs === 0) {
      handleTimerButtons("r");
    }
    if (secs === 0) {
      setTime([mins - 1, 59]);
      audio5.play();
    }
    else {
      if (secs === 58) {
        shotRoulette()
      }
      if (secs === 18) {
        audio7.play();
      }
      if (secs === 1) {
        audio2.play()
      }
      if (secs == 20 || secs == 59 || secs == 49 || secs == 31) {
        audio3.play()
      }
      if (secs === 15) {
        audio4.play()
      }
      if (secs === 37) {
        audio6.play()
      }
      setTime([mins, secs - 1]);
    }
  }

  React.useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  const play = () => {
    if (!audio.loop) { //TODO
      audio.play()
      audio.loop = true;
    }
  }

  const shotRoulette = () => {
    var names = ["mads", "herman", "haakon", "filip", "wilhelm"]
    var newDict = {
      "mads": "",
      "herman": "",
      "haakon": "",
      "filip": "",
      "wilhelm": ""
    }
    var rwc = require("random-weighted-choice")
    var table = [
      { weight: 1, id: 0 },
      { weight: 8, id: 1 },
      { weight: 1, id: 2 }
    ]

    for (var i = 0; i < 5; i++) {
      let name = names[i]
      let random = rwc(table)
      newDict[name] = random
    }
    setDrinkingDict(newDict)
  }

  const handleTimerButtons = (action) => {
    console.log(action)
    if (action === "s") {
      setReset(false)
      setPause(false)
    }
    else if (action === "p") {
      setPause(true)
    }
    else if (action === "r") {
      setReset(true)
    }
  }

  return (
    <div className="App">
      <Snowfall />
      <NavBar />
      <Counter /> 
      <ShotCounter />
      <PlayerGrid_13/>
      {/* <div className="BackgroundBlinker">
        <header className="App-header">
          <div className="container">
            <div className="col l12">
              <div className="row">
                <div className="col l12"><i className="material-icons" onClick={() => { handleTimerButtons("r") }}>restore</i><i className="material-icons" onClick={() => { handleTimerButtons("s") }}>timer</i><i className="material-icons" onClick={() => { handleTimerButtons("p") }}>timer_off</i></div>
                <div className="col l12"><p>{`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p></div>
                <div className="col l12"><h1><div className="ShotCounter">{`${secs.toString().padStart(2, '0')}`}</div></h1></div>
              </div>
              <div className="row">
                <div className="col l1"></div>
                <div className="col l2">Harb0</div>
                <div className="col l2">H-h-herman</div>
                <div className="col l2">Doktor Køkkus</div>
                <div className="col l2">Swinkhelm</div>
                <div className="col l2">Fleppy</div>
                <div className="col l1"></div>
              </div>
              <div className="row">
                <div className="col l1"></div>
                <div className="col l2"><img src={Mads} height={200} width={200} /></div>
                <div className="col l2"><img src={Herman} height={200} width={200} /></div>
                <div className="col l2"><img src={Haakon} height={200} width={200} /></div>
                <div className="col l2"><img src={Wilhelm} height={200} width={200} /></div>
                <div className="col l2"><img src={Filip} height={200} width={200} /></div>
                <div className="col l1"></div>
              </div>
              <div className="row">
                <div className="col l1">{secs == 13 || secs == 52 || secs == 42 || secs == 24 ? <img src={santa} height={200} width={200} /> : null}</div>
                <div className="col l2">{secs == 14 || secs == 53 || secs == 43 || secs == 25 ? <img src={santa} height={200} width={200} /> : secs < 12 && secs > 7 ? <img className="Wof" src={wof} height={200} width={200} /> : secs < 8 ? < img src={drinkingChoises[drinkingDict['mads']]} height={200} width={200} /> : null}</div>
                <div className="col l2">{secs == 15 || secs == 54 || secs == 44 || secs == 26 ? <img src={santa} height={200} width={200} /> : secs < 12 && secs > 7 ? <img className="Wof" src={wof} height={200} width={200} /> : secs < 8 ? < img src={drinkingChoises[drinkingDict['herman']]} height={200} width={200} /> : null}</div>
                <div className="col l2">{secs < 33 && secs > 28 ? <img src={simp} height={200} width={200} /> : secs == 16 || secs == 55 || secs == 45 || secs == 27 ? <img src={santa} height={200} width={200} /> : secs < 12 && secs > 7 ? <img className="Wof" src={wof} height={200} width={200} /> : secs < 8 ? < img src={drinkingChoises[drinkingDict['haakon']]} height={200} width={200} /> : null}</div>
                <div className="col l2">{secs == 17 || secs == 56 || secs == 46 || secs == 28 ? <img src={santa} height={200} width={200} /> : secs < 12 && secs > 7 ? <img className="Wof" src={wof} height={200} width={200} /> : secs < 8 ? < img src={drinkingChoises[drinkingDict['wilhelm']]} height={200} width={200} /> : null}</div>
                <div className="col l2">{secs == 18 || secs == 57 || secs == 47 || secs == 29 ? <img src={santa} height={200} width={200} /> : secs < 12 && secs > 7 ? <img className="Wof" src={wof} height={200} width={200} /> : secs < 8 ? < img src={drinkingChoises[drinkingDict['filip']]} height={200} width={200} /> : null}</div>
                <div className="col l1">{secs == 19 || secs == 58 || secs == 48 || secs == 30 ? <img src={santa} height={200} width={200} /> : null}</div>
              </div>
            </div>
          </div>
        </header>
      </div> */}
    </div>
  );
}

export default App;
