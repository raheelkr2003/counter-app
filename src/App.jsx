import { useState } from 'react'
import './App.css'

// GIT REMOTE ORIGIN
function App() {
  const[counter, setCounter] = useState(0)

  function incrementHandler() {
    setCounter(counter + 1 );
  }

  function handleDecrement(){

    if(counter > 0){
      setCounter(counter - 1)
    }else{
      alert("Error!")
    }
  }

  function resetHandler() {
    setCounter(0);
  }
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={resetHandler}>Reset</button>

    </>
  )
}

export default App
