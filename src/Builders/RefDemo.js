import React, { Component } from 'react';

class RefDemo extends Component {

    constructor(props) {
        super(props)
        // wired name I know, but that was just to prove a point, think of this.MyHomjie as a 'varaible'
        this.MyHomjie = React.createRef()



        
        //another appraoch for using ref is callBack ref
        this.callBackRef = null
        this.setCbRef = (element)=> {
            this.callBackRef = element
        }
    }

    // to add the focus on whatever DOM nod you wanted top focus on
    componentDidMount() {
        this.MyHomjie.current.focus()
        console.log(this.MyHomjie)

        // if(this.callBackRef) {
        //     this.callBackRef.focus()
        // }
        
    }

    StuffChange =()=> {
        console.log(this.MyHomjie.current.value)
    }
   
    render() { 
        return (
            <React.Fragment>
                <input ref={this.MyHomjie} onChange={this.StuffChange}/>


                {/*very cool approach but for now we comment it out <input ref={this.setCbRef}/> */}
            </React.Fragment>
        );
    }
}
 
export default RefDemo;