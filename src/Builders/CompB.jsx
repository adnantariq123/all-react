import React, { Component } from 'react';
import CompC from "./CompC";

class CompB extends Component {
    state = {  }
    render() { 
        return (
            <>
                <p> coming from Comp B</p>
                <CompC/>
            </>
        );
    }
}
 
export default CompB;