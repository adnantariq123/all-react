import React, { Component } from 'react';
import Hero from "../Builders/HeroErrors";
import ErrorBoundary from "../Builders/ErrorBoundary";


class ErrorThingy extends Component {
    state = {
        allHeros: [{name:"Batman", id:1}, {name:"SuperMan", id:2}, {name:"Joker", id:3}, {name:"Catman", id:4}]
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Error Handling</h1>

                            <p>These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of <b>any child component</b>.</p>
                            <ul>
                                <li><b>static getDerivedStateFromError</b> - This lifecycle is invoked after an error has been thrown by a descendant component. It receives the error that was thrown as a parameter and should return a value to update state.</li>
                                <li><b>componentDidCatch(error, info)</b> This lifecycle is invoked after an error has been thrown by a descendant component. It receives two parameters: error - The error that was thrown. info - An object with a componentStack key containing information about which component threw the error.</li>
                            </ul>

                            <p>something to note, since we are dealing with Errors, when viewing this with npm start the Error will naturally be AS VISIBLE AS IT IS INTENDED during development. When viewing this from the "build" folder, using the "npm run build" and then the "serve -s build" error will ONLY show where the error occured, and then whole app won't "crash".. this is a good thing :)</p>

                            <p>Placement of the error boundaries is up to you. It can be placed on the 'top lvl' component(Which i think is a waste) OR you can have the <u>error boundary nested in induvadual component, so that only that component with the error has a fallback UI and leaving the rest of the interface working as expected...</u> pretty cool huh!.</p>

                            {/* hos cool is that, What I JUST THOUGHT OFF, I is smart ^-^ */}
                            <ul>
                            {this.state.allHeros.map(xyz=>
                                <ErrorBoundary key={xyz.id}>
                                    <Hero heroName={xyz.name}/>
                                </ErrorBoundary>

                            )}
                            </ul>

                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default ErrorThingy;