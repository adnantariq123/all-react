import React, { useState } from 'react'

function HookCounterTwo() {
    //nice, why? because you can reset simply by the"Reset" button example
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            // VERY IMPORTANT, basicaly instead of passing in the value of the new state varaible
            // we pass in a FUNCTION that has access to the old state value
            //setCount(prevCount => prevCount + 1)
            // and it could have been called anything did not need to be called prevCount
            setCount(fuuuu => fuuuu + 1)
        }
    }
    return (
        <>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
        </>
    )
}

export default HookCounterTwo