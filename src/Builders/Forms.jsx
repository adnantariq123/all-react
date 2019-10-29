import React, {Component} from 'react';

class Forms extends Component {
    constructor (props) {
        super(props)
        this.state = { 
            fullname:null
         }
    }
    handleSubmit = (event) => {
        event.preventDefault()

        // 'show me the data
        const data = this.state;
        console.log("the data from this form is as follows :" + data)

    }

    handleInputChange = (event) => {
        event.preventDefault();
        //console.log(event);
        // the following allows you to get the name of the input as well as the value
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() { 
        //const {fullname} = this.state; BOTH LINES WORK THE SAME WAY ... ?
        const fullname = this.state.fullname;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Hi {fullname}</h1>

                        <form onSubmit={this.handleSubmit}>
                            <p>put stuff here : <input type='text' placeholder="what's your name" name="fullname" onChange={this.handleInputChange}/> </p>
                            <p> <button> submit</button></p>
                        </form>
                    </div>
                </div>
            </div>
          );
    }
}
 
export default Forms;