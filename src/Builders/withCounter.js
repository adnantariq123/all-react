import React, { Component } from 'react';

/*

HIGHER ORDER FUNCTIONS- You import them in which child component, take a look at HoverCounter.js AND ClickCounter.js

it is a function that accept the original compoent and returns a new component...
What makes this function even more powerful is that, just like any other functions it could be defined with
as many parameters as you want:

const functionName = (Component, argument1, argument2, .. you could add AS MANY arguments as you need) =>{
    customState={}

    customHandler=()=>{}

}
*/

const UpdatedComponent = (OriginalComponent, incrementNumber) => {
    class NewComponent extends Component {
		constructor(props) {
			super(props)

			this.state = {
				count: 0
			}
		}

        // you could have added as many different functions you wanted. You then simply attach them as props 
        //to the OriginalComponent
		incrementCount = () => {
            if (incrementNumber === undefined) { // undefined worked, nul did not
                incrementNumber =1
            }
			this.setState(prevState => {
				return { count: prevState.count + incrementNumber }
			})
		}
        
        render() { 
            return (
                //we could add as many or props to the OriginalComponent, that originally were not there
                <OriginalComponent 
                name="Adnan"
                count={this.state.count}
                DaIncreasing={this.incrementCount}
                //VERY IMPORTANT, ALWAYS spread whatever props were originally added as well!!!!
                {...this.props}
                />
            );
        }
    }
     
    // instead of using the export like we typically would with component we are simply  RETURNING that new component
    //export default NewComponent;
    return NewComponent
}

export default UpdatedComponent;