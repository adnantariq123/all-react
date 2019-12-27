import React, { Component } from 'react';

//HOC
import HoverC from "../Builders/HoverCounter";
import ClickC from "../Builders/ClickCounter";

class HOC extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Higher Order Component</h1>
                            <p>when there is a need to share something common, like common functionality between components.</p>
                            <p>A HOC is a pattern where a function takes a component as an Argument and returns a new component. Typically an HOC adds data or functionality to the original component.</p>

                            <p> const NewComponent = <b>higherOrderComponent</b>(originalComponent)</p>
                            <p> const <b>IronMan</b> = <b>Suit</b>(Tony Stark)</p>

                            
                            <HoverC txt="How you Doing -.-?"/>
                            <ClickC/>
                            
                        </div>
                        </div>
                        </div>
            </>
        );
    }
}

export default HOC;