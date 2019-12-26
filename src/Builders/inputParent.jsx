import React, { Component } from 'react';
import Inputt from "../Builders/input";

//https://www.youtube.com/watch?v=8aCXVC9Qmto&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=29
class InputParent extends Component {
    state = {  }
    componentRef = React.createRef();

    chickHandler=()=>{
        //VERY impressive, call the child function from a child class component, from a parent to pass FOCUS
        this.componentRef.current.focusInputChildThingy()
    }
    render() { 
        return (
            <div className="container">
            <div className="row">
              <div className="col-12">
              <h1>Refs with Class Components</h1>
              <p> what if you want to call the focus on an DOM nod which is kinda 'outside'</p>
              <p>Ref has to be attached to a class component, and not attached to a funtional component</p>

              <Inputt ref={this.componentRef}/>

              <button onClick={this.chickHandler}>Focus to child thingy</button>
              </div>
            </div>
          </div>
        );
    }
}
 
export default InputParent;