//firstly add the hoooks
import React, { useState, useEffect } from 'react'

function HookCounterOne() {
    // first the basic, we need a state in our functional component
    const [count, setCount] = useState(0)
    
    //calling the setName directly at the input field, cool!
    const [name, setName] = useState('')
    // the above was 'syntatical sugar, but we needed it to show the useEffect example at work
    
    // here useEffect acts like componentDidMount()  in a class component AAAAND what's cool is that useEffect ,
    // we simply have to call it by the () and INSIDE THAT CALLING FUCNTION,
    // we write our logic to do whatevere we would THEN useEffect then get fired 
    // by TARGETING a part of the state (becuase in this sample we have two state properties: count, and name)
    // so in this example we are targeting the , [count]
    //**************************
    // OR we can leave it blank and every time any state property changes useEffect is fired
	useEffect(() => {
		console.log('useEffect - Updating document title ')
		document.title = `You clicked ${count} times`
	}, [count])
	return (
		<div>
			<input type="text" value={name} onChange={e => setName(e.target.value)} />
			<button onClick={() => setCount(count + 1)}>
				useEffect - Click {count} times
			</button>
		</div>
	)
}

export default HookCounterOne