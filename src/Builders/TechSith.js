import React, { Component  } from 'react';

import { connect } from 'react-redux';
//import {useSelector, useDispatch} from 'react-redux';


/* Following can also be written above the class
const mapStateToProps = state => ({ age: state.StateCC.age })
CAN ALSO BE Written like this 
*/
const mapping = xyz => ({ 
    age: xyz.StateCC.age ,
    //isMarked: xyz.StateCC.isMarked,
    MarkNum: xyz.StateCC.MarkNum
});

//mapDispachToProps can also be written as something with another name
const dispatching =(dispatch)=> {
    return {
        AgeUP: ()=> dispatch({type:'Age_UP'}),
        AgeDOWN: ()=> dispatch({type:'Age_DOWN'}),
        MARKED: ()=> dispatch({type:'Marked'}),
        RESET: ()=> dispatch({type:'Reset'})
    }
}

class TechSithStateCounter extends Component {

    /* componentDidMount() is invoked immediately after a component is mounted (inserted into the tree).*/
    componentDidMount() {
        console.clear();
        this.props.RESET();        
        // not the best reset but it does the job for now
    }



    render() {
       
        //console.log("yo rendererrrr");
        //const counter = useSelector(state => state.counter);
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Tech sit Age counter</h1>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {/* all the magic to check if Marked number matches the current number THEN change css */}
                        <div className="col-3" style={this.props.MarkNum === this.props.age ? {background:"lightBlue"} :null}>
                            Age :  {this.props.age}
                        </div>
                        <div className="col-3">
                            <button type="button" className="btn btn-info btn-block" onClick={this.props.AgeUP}>+</button>
                        </div>
                        <div className="col-3">
                            <button type="button" className="btn btn-info btn-block" onClick={this.props.AgeDOWN}>-</button>
                        </div>
                        <div className="col-3">
                            <button type="button" className="btn btn-warning btn-block" onClick={this.props.MARKED}>Mark</button>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
    //render ends here() 



}


export default connect(mapping, dispatching)(TechSithStateCounter);

// export default TechSithStateCounter;