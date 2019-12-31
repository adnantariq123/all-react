const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require("redux-thunk").default
const axios = require("axios")


// this is a sample not used
const initialState= {
    loading:false,
    users: [],
    error:""
}


// as per vishwas we are using actions creators, these are functions that return as action?
// https://www.youtube.com/watch?v=yGyj0mSfVuk&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=12


//actions
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST"
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE"


// actions creators
const fetchUsersRequest =()=> {
    return {
        type:FETCH_USERS_REQUEST
    }
}
// actions creators
const fetchUsersSuccess =(users)=> {
    return {
        type:FETCH_USERS_SUCCESS,
        payload: users
    }
}
// actions creators
const fetchUsersFailure = error => {
    return {
        type:FETCH_USERS_FAILURE,
        payload: error
    }
}



const reducer=(state= initialState, action)=> {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading:true
            }

        case FETCH_USERS_SUCCESS:
            return {
                loading:false,
                users: action.payload,
                error:""
            }

        case FETCH_USERS_FAILURE:
            return {
                loading:false,
                users: "",
                error:action.payload
            }
    }
}


// watch this video again
//https://www.youtube.com/watch?v=z2XCUu2wIl0&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=13

const fetchUsers = () => {
    return function (dispatch) {
        dispatch (fetchUsersRequest())
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            const users = response.data.map(user => user.id);
            console.log(response.data) 
            dispatch(fetchUsersSuccess(users)) 
        })
        .catch(error=> {
            console.log(error)
            dispatch(fetchUsersFailure(error.message))
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(fetchUsers())






