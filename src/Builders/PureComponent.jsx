import React, { PureComponent } from 'react';

class PureComp extends PureComponent {
    render() { 
        console.log("Pure component render")
        return (
            <React.Fragment>
                <h1>Pure Components {this.props.name}</h1>
                <p>A PURE component implements the <i>shouldComponentUpdate</i> and does a "shallow" props and state comparison.... meaning everytime the state from the parent got updated, it MAY or MAY NOT need to render itself(again, based on if the shalow comparison of states/props)
                </p>

                <h3>Shallow Comparison (SC)</h3>
                <p><b>Primitive Type</b> a (SC) b returns true if a and b have same value and are of the same type</p>
                <p>for eg: string "Adnan" (SC) string "Adnan" returns true</p>

                <h3>Why should you use a pure component</h3>
                <p>A Pure compoenent avoid unnecessary render and can help in preformance boots!</p>


            </React.Fragment>
        );
    }
}
 
export default PureComp;