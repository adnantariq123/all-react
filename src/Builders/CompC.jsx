import React, { Component } from 'react';
import {UserConsumer} from "../Builders/UserContext";

class CompC extends Component {
    state = {  }
    render() { 
        return (
                // notice we did need those React.Fragments. WE NEED TO SPECIFIY A FUNCTION
                <UserConsumer>
                    {dml=> {
                    return <p> coming from Comp C, and that name was {dml}</p>
                        }
                    }
                    


                </UserConsumer>
          
        );
    }
}
 
export default CompC;