import React from 'react';
import {useSelector, useDispatch} from 'react-redux';


function UseSelectorZZ() {

    const MarkedNumFromTechSith = useSelector (state => state.StateCC.MarkNum)

    // needs more love
    const dispatch = useDispatch()
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Hooks - UseSelector {MarkedNumFromTechSith} <span style={{fontSize: '14px'}}>Coming from TechSithExample</span></h1>
                    
                    <p>it supplies the state to a functional component.... it is a Hook that React library provides, which works a lot like the mapStateToProps we use when using redux store  in components.</p>

                    <p>useSelector accepts a function as it's parameter, and this function is called the selector function. and it recieves the redux state as an argument.</p>
                
                    <h1>Hooks - useDispatch </h1>
                    <p>useDispatch returns a reference to the dispatch from the redux store.</p>

                    {/* <button type="button" className="btn btn-warning btn-block" onClick={dispatch({type:'Marked'})}>Mark</button> */}
                </div>
            </div>
        </div>
    )
}

export default UseSelectorZZ;