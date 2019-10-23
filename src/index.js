import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from './Main';
import * as serviceWorker from './serviceWorker';



//adding reducer
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import MainCombineState from './ALLStatesGoHere/MainCombineStates';


const store = createStore(MainCombineState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//const store = createStore(MainCombineState);




ReactDOM.render(<Provider store={store}><MainApp /></Provider>, document.getElementById('root'));





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
