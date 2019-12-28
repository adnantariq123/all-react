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


                            <HoverC txt="How you Doing -.-?" />
                            <ClickC />

                        </div>
                    </div>
                </div>
<br/><br/>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Render Props</h1>
                            <p> there is also render props which is kinda like HOC. look at the following video <a href="https://www.youtube.com/watch?v=EZil2OTyB4w&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=37" target="_new">Check it out!</a></p>
                        </div>
                    </div>
                </div>


            </>
        );
    }
}

export default HOC;