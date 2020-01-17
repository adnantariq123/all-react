import React, { Component } from 'react';
import {fetchUsers} from "../ALLStatesGoHere/AllStates/FakeStuff/userActions";
import { connect } from 'react-redux';

const mapping = state => { 
    return {
    //Fakers: state.FakeDataCC
    StateCC: state.StateCC
    }
};

const dispatching = dispatch  => {
    return {
        Fakers: () => dispatch(fetchUsers())
      }
}


class MyCall extends Component {
    //state = {  }
    render() { 
        return (
            <>
            {/* {this.props.Fakers.map(xyz=> <p>{xyz.name}</p>)} */}
            {/* we know that OBJECTS with not work p tags 
            so this.props.Fakers will not work as FakeDataCC is an object, Now the keys of the objects are 
            loading
            data
            error
            
            IF I add those, the applications work, but NOTHING is showing as those keys are NOT string 
            */}
            <p style={{color:"red"}}>COMING from class MyCall extends Component :: {this.props.StateCC.age}</p>
           
            </>
        );
    }
}
 
export default connect(mapping, dispatching)(MyCall);