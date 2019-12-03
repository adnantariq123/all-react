import StateCounter from './AllStates/StateCounter';
import FakeData from './AllStates/FakeData';
import BlankData from './AllStates/BlankData';
import DataPersist from './AllStates/DataPersist';


// the COMBINE REDUCERS is an Function with Objects... where each object is a state
// don't over complicate it, it's very easy 

import {combineReducers} from 'redux';


const MainCombined = combineReducers(
    {
        StateCC: StateCounter,
        FakeData: FakeData,
        BlankData:BlankData,
        DataPersist:DataPersist
    }


);

export default MainCombined;






