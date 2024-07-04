import Timer from './compnents/Timer';
import './App.css';
import FancyTimer from './compnents/FancyTimer';
import { useState } from 'react';

function App() {
const [showTimer, setShowTimer] = useState(true);  

  return (
    <>
      <Timer/>

      {showTimer && (
        <>
        <FancyTimer/>
        <button onClick={() => setShowTimer(false)}>Turn Off</button>
        </>
        )}
      
    </>
  
  )
}

export default App
