import Timer from './compnents/Timer';
import './App.css';
import FancyTimer from './compnents/FancyTimer';
import { useState } from 'react';
import CharacterList from './compnents/CharacterList';

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

      <CharacterList/>
      
    </>
  
  );
}

export default App;
