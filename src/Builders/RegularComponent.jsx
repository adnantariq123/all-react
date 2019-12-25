import React, { Component } from 'react';

class RegComp extends Component {

    render() { 
        console.log("regular component render")
        return (
            <React.Fragment>
                <h1>Regular Component {this.props.name}</h1>
                <p>A Regular component does NOT implement the <i>shouldComponentUpdate</i> method. It always returns <b>true</b> by default.... meaning everytime the state from the parent got updated, regular compoent will get updated as well.</p>
            </React.Fragment>
        );
    }
}
 
export default RegComp;