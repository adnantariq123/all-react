import React, {Component} from 'react';

import { connect } from 'react-redux';


//mapStateToProps
const mapping = xyz => ({ 
    fullname: xyz.BlankData.fullname 
});


//mapDispatchToProps can also be written as something with another name
const mapDispatchToProps =(dispatch, aaa)=> {

    //AgeUP: ()=> dispatch({type:'Age_UP'}),
    //console.log("dispatch is : " + dispatch);
    //console.log("aaa is : " + aaa);

    //return dispatch
    //return ()=>({dispatch})
    return (
        ()=> dispatch({type: 'UpdateName', valz: aaa})
    )
    };



class Forms extends Component {
    // because we are using mapping or what the world knwows as 'mapStateToProps' fullname orignally is coming
    // from the store, but then we make a copy of that in this component state. AND because that is 'extending the 
    //the parent props we are using the constructor (props) && super(props) to get the 'props' from the parent thingy

    constructor (props) {
        super(props)
        this.state = { 
            fullname:this.props.fullname
         }
    }
    // state = { 
    // fullname:null
    // }

    handleSubmit = (event) => {
        event.preventDefault()

        // 'show me the data
        const data = this.state;
        console.log("the data from this form is as follows :" + data.fullname)

        mapDispatchToProps( 'UpdateName',data.fullname)
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
        console.log(fullname)

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Hi {fullname}</h1>

                        <form onSubmit={this.handleSubmit}>
                            <p>put stuff here : <input type='text' placeholder={this.props.fullname} name="fullname" onChange={this.handleInputChange}/> </p>
                            <p> <button> submit</button></p>
                        </form>
                    </div>
                </div>
            </div>
          );
    }
}
 
//export default connect (mapping, mapDispatchToProps) (Forms);
export default Forms;