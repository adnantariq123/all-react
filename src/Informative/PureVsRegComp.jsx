import React, { Component } from 'react';

import PureComp from "../Builders/PureComponent";
import RegComp from "../Builders/RegularComponent";
import BottomBorder from '../Builders/VisualShared/BottomBorder';
import MemoComp from "../Builders/Memo";


class ParentComponent extends Component {
    state = {
        name:"Adnan"
    }

    componentDidMount() {
        setInterval(()=> {
            this.setState({name:"Adnan"})
        }, 2000)
    }

    render() {
        console.log("Parent Component holding both pure and regular, AS WELL as React.Memo. Coming from Parent render RENDER")
        return (
            <React.Fragment>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* <h1>Regular vs Pure Components </h1>
                            <br/><br/> */}
                            <RegComp name={this.state.name} />
                            
                            <BottomBorder />


                            <PureComp name={this.state.name}/>

                            <BottomBorder />
                            <p><b>"What Pure compoenets are to Class based components; Memo is to functional Components"</b></p>

                            <MemoComp name ={this.state.name}/>
                        </div>
                    </div>
                </div>



            </React.Fragment>
        );
    }
}

export default ParentComponent;