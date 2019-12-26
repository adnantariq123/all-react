import React, { Component } from 'react';

class Input extends Component {
    state = {  }

    inputRef= React.createRef();

    focusInputChildThingy () {
        this.inputRef.current.focus()
    }

    render() { 
        return (
            <React.Fragment>
                <input ref={this.inputRef}/>
            </React.Fragment>
        );
    }
}
 
export default Input;