import React, { useState } from 'react'

function HookCounterFour() {
	// initializing the state with useState, and makeing it array by passinga blank []
	//HOWEVER if there was an inital value we want to populate this array with, we would do something like this
	//const [items, setItems] = useState([{id:0, value:55}, {id:1, value:5}])
	const [items, setItems] = useState([])

	const addItem = () => {
		setItems([
			...items,
			{
				id: items.length,
				value: Math.floor(Math.random() * 10) + 1
			}
		])
	}

	return (
		<div>
			
			<button onClick={addItem}>Add a number</button>
			<ul>
				{items.map(item => (
					<li key={item.id}>{item.value}</li>
				))}
			</ul>
		</div>
	)
}

export default HookCounterFour