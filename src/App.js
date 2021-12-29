import './App.css';
import React from 'react';
import ConfettiGenerator from "confetti-js";
import NavBar from './components/navbar/NavBar'
import Counter from './components/counter/counter'
import PlayerGrid_13 from './components/playerGrid/playergrid_13'
import ShotCounter from './components/shotCountdown/shotCountdown'
import ShotSelector from './components/shotCountdown/shotSelector/shotSelector';
import ThemeDancers from './components/themeDancers/themeDancers'
import { useSelector } from 'react-redux'

function App() {
  const theme = useSelector(state => state.theme)

  React.useEffect(() => {
    const confettiSettings = {
      target: 'my-canvas',
      props:
        [{
          "type": "svg", "src": `${theme.path}rain.svg`,
          size: "70"
        }],
      rotate: "true",
      clock: "30",
      max: "40"
    };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, [theme.path])

  return (
    <div className="App" style={{ backgroundImage: `url(${theme.path}background.jpg)`, backgroundSize: "cover", height: document.documentElement.clientHeight, width: document.documentElement.clientWidth }}>
      <canvas id="my-canvas" style={{ pointerEvents: "none", width: document.documentElement.clientWidth - 100, height: document.documentElement.clientHeight, left: "0px", position: "absolute", zIndex: "1" }}></canvas>
      <NavBar />
      <ThemeDancers /> 
      <Counter />
      <ShotCounter />
      <PlayerGrid_13 />
      <ShotSelector />
    </div>
  );
}

export default App;
