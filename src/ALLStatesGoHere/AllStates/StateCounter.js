
const initialState = {
    age:3,
    //isMarked:false,
    MarkNum:0
}
const StateCounter = (state=initialState,action) => {
    let newState = {...state};
    //newState.age=newState.age+10;

    
    if(action.type ==='Age_UP') {
        newState.age++;
    };

    if(action.type ==='Age_DOWN') {
        newState.age--;

        if(newState.age ===0) {
        newState.age = 1;
        }
    };

    if(action.type ==='Marked') {
        return {
            ...newState,
            // you do not need , just grab the value and that's it
            //isMarked: !newState.isMarked,
            
            MarkNum: newState.age
        }
    }; 
    
    if(action.type==='Reset') {
        return {
            ...newState,
            MarkNum: 0
        }       
    }

    console.log(newState);
    return newState;

}

export default StateCounter;