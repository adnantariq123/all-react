import React from 'react';

import UseEffect1 from "../Builders/UseEffect1";
import UseSelector from "../Builders/UseSelector";

function useEffect() {


    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Hooks - useEffect</h1>
                    <p>when doing "side effects" like fecth api, updating DOM, in CLASS components, we would make use of the different life cycle method like componentDidMount() etc. The <b>Effect hook</b>  lets you perform "side effects" in <b> functional component</b> just like you would in class components.</p>
                    <br/>
             <p>here useEffect acts like componentDidMount()  in a class component AAAAND what's cool is that useEffect ,<br/>
we simply have to call it by the () and INSIDE THAT CALLING FUCNTION,<br/>
 we write our logic to do whatevere we would THEN useEffect then get fired <br/>
 by TARGETING a part of the state (becuase in this sample we have two state properties: count, and name)<br/>
so in this example we are targeting the , [count]<br/>
*************************************<br/>
 OR we can leave it blank and every time any state property changes useEffect is fired</p><br/>
                    <UseEffect1/>

                    <br/><br/>
                    <UseSelector/>
                </div>
            </div>
        </div>
    )
}

export default useEffect