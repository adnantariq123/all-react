
const initialState = {
    age:0
}
const StateCounter = (state=initialState,action) => {
    const newState = {...state};
    //newState.age=newState.age+10;

    if(action.type ==='Age_UP') {
        newState.age++;
    };

    if(action.type ==='Age_DOWN') {
        newState.age--;
    };

    
    return newState;

}

export default StateCounter;