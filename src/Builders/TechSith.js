import React, { Component, useState  } from 'react';

//import { connect } from 'react-redux';
//import {useSelector, useDispatch} from 'react-redux';

class TechSithStateCounter extends Component {
    
    
    render() {

       
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
                        <div className="col-4">
                            Age :  
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }



}



//export default connect(mapping)(TechSithStateCounter);

export default TechSithStateCounter;