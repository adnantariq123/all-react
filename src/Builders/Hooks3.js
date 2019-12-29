import React, { useState } from 'react'

function HookCounterThree() {
    // BECAUSE this is an object thingys are slightly different at the time of setName, look Down!
	const [name, setName] = useState({ firstName: '', lastName: '' })
	return (
		<form>
			<input
				type="text"
                value={name.firstName}
                //we pass in a FUNCTION at the time of the event
                //we make use of the spread operator to get whatever already exist in the name state
                //then we update the unique 'key, value pair' of this object in this case firstName
				onChange={e => setName({ ...name, firstName: e.target.value })}
			/>
			<input
				type="text"
                value={name.lastName}
                //Same logic used here as well
				onChange={e => setName({ ...name, lastName: e.target.value })}
			/>
			<h2>Your first name is - {name.firstName}</h2>
			<h2>Your last name is - {name.lastName}</h2>
			<h2>{JSON.stringify(name)}</h2>
		</form>
	)
}

export default HookCounterThree