import React, { Component } from 'react';
import CompB from "./CompB";

class CompA extends Component {
    state = {  }
    render() { 
        return (
            <>
                <p> coming from Comp A</p>
                <CompB/>
            </>
        );
    }
}
 
export default CompA;