import React, { useState } from 'react'

import Hooks2 from "../Builders/Hooks2";
import Hooks3 from "../Builders/Hooks3";
import Hooks4 from "../Builders/Hooks4";

function HookCounter() {

    // LOOK HOW EASY THIS IS AS COMPARED TO CLASS STATES
    const [babyButt, YuNo] = useState(0)

    function BoomShakalak (operator, xyz) {

        if(operator==="add"){
            const Boom = babyButt+1
            YuNo(Boom)
        }
        else 
        if(operator==="subtract"){
            // I is smart boy ^-^
            if (babyButt > 0) {
            const Boom = babyButt-1
            YuNo(Boom)
            }
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Hooks</h1>
                    
                    <h3> UseSate</h3>
                    <p>"The useSate does not autmatically merge and update the object" - vishwas</p>

                    <p> look how easy it was to add state in a <b>functional component</b>. only call Hooks at the "top lvl", that means dont call Hooks inside a loop condition, or nested functions.</p>
                    
                    <p>Count : {babyButt}</p>
                    
                    {/*a very good and simple way of calling hook
                    <button onClick={() => YuNo(babyButt + 1)}>plus</button>
                    <button onClick={() => YuNo(babyButt - 1)}>minus</button> */}

                    <button onClick={() => BoomShakalak("add")}>plus</button>
                    <button onClick={() => BoomShakalak("subtract")}>subtract</button>
                    <br/> <br/> <br/>
                    <h4>Another appraoch of doing it, dont confuse yourself, But it's a ALWAYS better to take the perstate and then doing something to it..</h4>

                    <Hooks2/>

                    <br/> <br/> <br/>
                    <Hooks3/>

                    <br/> <br/> <br/>
                    <Hooks4/>

                </div>
            </div>
        </div>
    )
}

export default HookCounter