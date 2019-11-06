const initialState = {
    fullname:"Adi"
}
const BlankData = (state=initialState, action) => {
    let newState = {...state};

    //State.fullname = action
    if(action.type ==='UpdateName') {
        newState.fullname = action.valz;
    };

    //console.log(newState);

    return newState;
}

export default BlankData;