import React, {useState, useEffect,useRef} from "react"
import useWordGame from './customHooks/useWordGame'
import './App.css'



function App() {

    const {
        handleChange,
        text,
        isTimeRunning,
        textBoxRef,
        timeRemaining,
        startGame,
        wordCount
    } = useWordGame(20)
   
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
                ref={textBoxRef}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button 
                onClick={startGame}
                disabled={isTimeRunning}
                
                
            >
                Start
            </button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}

export default App
