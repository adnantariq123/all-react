import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./FakeStuff/userTypes";


const initialState = {
  loading:true,
  data:[],
  error:""

}


/*

*********************************************************************
So basicly, Based on the action do something to the state, If no action 
then return state as it is (default: return state).
*********************************************************************

*/
const FakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ''
      }
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      }
    default: return state
  }
}

export default FakeReducer;