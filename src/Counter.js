import React, { useState } from 'react'


function Counter() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }

  const decrementCount = () => {
    setCount(count - 1)
  }

  const resetCount = () => {
    setCount(0)
  }

  const timer = () => setInterval(incrementCount, 1000)

    return(
      <div>
        <h1>Count!</h1>
        <p>{count}</p>
        <div className="buttons">
          <div className="manualCount">
            <button onClick={incrementCount}>+</button>
            <button onClick={decrementCount}>-</button>
          </div>
          <button onClick={timer}>Timer</button>
          <button onClick>Stop</button>
          <button onClick={resetCount}>Reset</button>
        </div>
      </div>
  )
}

export default Counter