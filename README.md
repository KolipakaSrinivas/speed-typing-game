# SpeedTypingGame
React project based on useState-Hook, useEffect-Hook, useref-Hook,and custom-Hook




1.Challenge: Using hooks, track the state of the text in the textarea on every keystroke
  To verify it's working, you could just console.log the state on every change
 
2.Challenge: Using hooks, track the state of the text in the textarea on every keystroke
 * To verify it's working, you could just console.log the state on every change
     const [text, setText] = useState("")
    
    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }
    
    console.log(text)
             <!-- <textarea
                onChange={handleChange}
                value={text}
            /> -->
3. Create a function to calculate the number of separate words in the `text` state
 * For now, just console.log the word count when the button gets clicked to test it out.


     function calculateWordCount(text) {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }

     <!-- <button onClick={() => console.log(calculateWordCount(text))}>Start</button> -->

4. . Create state to hold the current value of the countdown timer.
 *    Display this time in the "Time Remaining" header



5.Set up an effect that runs every time the `timeRemaining` changes
     The effect should wait 1 second, then decrement the `timeRemaining` by 1
  
     Hint: use `setTimeout` instead of `setInterval`. This will help you avoid
     a lot of extra work.
  
    Warning: there will be a bug in this, but we'll tackle that next

        my answer 
        
         <!-- useEffect(()=>{
             setTimeout(()=>{
            setTimeRemaining(time -1)  //it is callback function
        },1000)
    }[timeRemaining]) mistake , -->

        correct answer 
         <!-- useEffect(() => {
         setTimeout(() => {
             // setTimeRemaining(time => time - 1)
         }, 1000)
     }, [timeRemaining]) -->


5.stop the time befour going to negative

         useEffect(() => {
        if(timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        }
    }, [timeRemaining])

6. Make it so clicking the Start button starts the timer instead of it starting on refresh
 * (Hint: use a new state variable to indicate if the game should be running or not)

    correct answer


     const [isTimeRunning, setIsTimeRunning] = useState(false)

        useEffect(() => {
        if(isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        } else if(timeRemaining === 0) {
            setIsTimeRunning(false)
        }
    }, [timeRemaining, isTimeRunning])

        button onClick={() => setIsTimeRunning(true)}>Start</button>

        # useEffect() function take dependences [timeRemaining, isTimeRunning])
        #  setTimeOut(()=>{

        }1000) settime another function 
        #


    6.When the timer reaches 0, count the number of words the user typed in 
     and display it in the "Word count" section 

        const [wordCount, setWordCount] = useState(0)

        useEffect(() => {
        if(isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        } else if(timeRemaining === 0) {
            setIsTimeRunning(false)
            const numWords = calculateWordCount(text) =>    answer
            console.log(numWords)                     => 
        }
    }, [timeRemaining, isTimeRunning])


   7. After the game ends, make it so the user can click the Start button again
     to play a second time 

     answes is created function again function 
     
     startClock() {
        setIsTimeRunning(true)
        setTimeRemaining(5)
        setText("")
    }

    <button onClick={startClock}>Start</button>

    