import React, { Component } from 'react';


//https://www.youtube.com/watch?v=3rlUADfuKhQ&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=3
class ReduxInfo extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <h1>Redux</h1>
                        <p>"Redux is a predictable state container for JavaScript apps". The state of your whole application is stored in one object tree within a single store.</p>
                        <ul>
                            <li><b>Used for js apps/website/SPA</b>, meaning it can be used for ANY other packages like Angualr, Vue, etc</li>
                            <li><b>it is a state container</b>, meaning store the state of your application. a part of the memory</li>
                            <li><b>it is "predictable"</b>, in any application the state can change. in Redux the changes to your state become predictable</li>

                        </ul>

                        <p>Managing state in react is not as simple, as it follows the props/ state appraoch and get conplicating with many n-th tier components. With REDUX your states stay outside your components.</p>

                        <p><b>Reducer</b> are functions that take <b>state</b> and <b>actions</b> as parameters, <b> and returns the new state</b></p>


                        <p>The only way to change the state is to emit an action, an object describing what happened.... to undate the state of your app, you need to let redux know with an action. <b>Actions</b>, are the only way for your application to ineract with the Store. These are simple js object, but must have a'type' property which defined the action. 'types' are basic string constants.</p>
                        <p>To specify how the state tree is tranformed by actions, you write reducers. Reducers are functions that accepts state and actions as arguments, and return the next state of that applications.</p>
                        <p><b>Find out what are selectors??</b></p>

                        <h1>Middleware</h1>
                        <p>the suggested way to extend Redux with custom functionality</p>
                        <p>Provides a "third party extension point" between dispatchijng an action, and the moment it reaches the reducers.... <i> whatevere that means</i> </p>
                        <p>Use Middleware for <b>logging, cash reporting, performing asynhronous </b> task etc</p>
                            <br/><br/>
                        
                        <p className="alert alert-primary"><i>up till now we we using <b>Synchronous Actions</b>  </i>: that is as soon as an actions was dispatched, the state was immediately updated.</p>
                        <p className="alert alert-danger"><b>Async Actions</b> Asynchronous API calls to fetch data from an end point and use that data in your applications</p>
                        <h3>ThunkMiddleware allow the action creator to return function instead of an action</h3>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default ReduxInfo;