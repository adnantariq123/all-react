import React, { Component } from 'react';

//HOC baby!
// it is a function that accept sht eoriginal compoent and returns a new component
const UpdatedComponent = (OriginalComponent) => {
    class NewComponent extends Component {
		constructor(props) {
			super(props)

			this.state = {
				count: 0
			}
		}

		incrementCount = () => {
			this.setState(prevState => {
				return { count: prevState.count + 1 }
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