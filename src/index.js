import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from './Main';
import * as serviceWorker from './serviceWorker';


import logger from 'redux-logger'

//adding Middleware
import {applyMiddleware, createStore} from 'redux';
import thunk from "redux-thunk";
import {Provider} from 'react-redux';

// my main reducer
import MainCombineState from './ALLStatesGoHere/MainCombineStates';


//const store = createStore(MainCombineState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//const store = createStore(MainCombineState);
const store = createStore(MainCombineState, applyMiddleware(logger, thunk));



ReactDOM.render(<Provider store={store}><MainApp /></Provider>, document.getElementById('root'));





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
