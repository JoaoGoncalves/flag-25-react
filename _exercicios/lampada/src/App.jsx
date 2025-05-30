import { useState } from 'react'
import './App.css'
import LightbulbSvg from './components/LightbulbSvg'
import Interuptor from './components/Interuptor';

function App() {

  let [light, setLight] = useState(false);

  let fillColor = light ? 'lightgreen' : 'gray';


  const handleLight = () => setLight(!light);

  return (
    <>
      <h1 onClick={handleLight}>Blackout</h1>
      <hr />
      <LightbulbSvg fillColor={fillColor} />
      <br />
      <Interuptor ligarDesligar={handleLight} />
      {/* <button onClick={handleLight}> {light ? 'Off' : 'On'} </button> */}
      <p> {light ? 'Ligado' : 'Desligado'} </p>
    </>
  )
}

export default App
