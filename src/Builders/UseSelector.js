import React from 'react';
import {useSelector} from 'react-redux';


function UseSelectorZZ() {

    const MarkedNumFromTechSith = useSelector (state => state.StateCC.MarkNum)
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Hooks - UseSelector {MarkedNumFromTechSith}</h1>
                    
                    <p> is a Hook that React library provides, which works a lot like the mapStateToProps we use when using redux store  in components. In other words it supplies the state to a functional component.</p>

                    <p>useSelector accepts a function as it's parameter, and this function is called the selector function. and it recieves the redux state as an argument.</p>
                </div>
            </div>
        </div>
    )
}

export default UseSelectorZZ;