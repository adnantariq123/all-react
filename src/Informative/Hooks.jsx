import React, { useState } from 'react'

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
                    
                    <p> look how easy it was to add state in a <b>functional component</b>. only call Hooks at the "top lvl", that means dont call Hooks inside a loop condition, or nested functions.</p>
                    
                    <p>Count : {babyButt}</p>
                    
                    {/*a very good and simple way of calling hook
                    <button onClick={() => YuNo(babyButt + 1)}>plus</button>
                    <button onClick={() => YuNo(babyButt - 1)}>minus</button> */}

                    <button onClick={() => BoomShakalak("add")}>plus</button>
                    <button onClick={() => BoomShakalak("subtract")}>subtract</button>
                </div>
            </div>
        </div>
    )
}

export default HookCounter