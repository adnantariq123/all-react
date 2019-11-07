const initialState = {
    fullname:"Adi"
}
const BlankData = (state=initialState, action) => {
    const newState = {...state};

    //State.fullname = action
    if(action.type ==='UpdateName') {
        console.log("came to reducer BlankData : " + action.valz); //good news it comes here... then then it reset :(
        newState.fullname = action.valz;

        return newState;
    };

    //console.log(newState);

    return newState;
}

export default BlankData;