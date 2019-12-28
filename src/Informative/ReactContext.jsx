import React, { Component } from 'react';
import CompA from "../Builders/CompA";
import {UserProvider} from "../Builders/UserContext";

class Context extends Component {
    state = {  }
    render() { 
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>React Context</h1>
                            <p><b>Context provides a way to pass data through the component tree without having to pass props down manually at every level.</b></p>
                            <p>Context provides a way to share values between components without having to explicitly pass a prop through every level of the tree. Context is designed to share data that can be considered “global” for a tree of React components</p>

                            <p> so think of it this way, component D, is nested in Component C, which is nested in component B, which is nested in component A... and component D needs the data, React Context makes it very easy to pass the data directly to componentn D without passing it as props from A, B, and C</p>

                            <ul>
                                <li>Create the context</li>
                                <li>Provide a context value</li>
                                <li>Consume the context value</li>
                            </ul>

                            {/* the provider component is responsible fort provided a value to ALL the descented component,
                            unfortunatly i think it only takes on property and it HAS to be named VALUE  so ID would not work*/}
                            <UserProvider value="Adnan" id="007">
                            
                                <CompA/>
                            </UserProvider>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
 
export default Context;