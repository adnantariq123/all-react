import StateCounter from './AllStates/StateCounter';


// the COMBINE REDUCERS is an Function with Objects... where each object is a state
// don't over complicate it, it's very easy 

import {combineReducers} from 'redux';


const MainCombined = combineReducers(
    {
        StateCC: StateCounter
    }


);

export default MainCombined;






