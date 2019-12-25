import React from 'react';

function MemoComp ({name}) {
    console.log(" coming from MemoComp function")
    return (
        <div>
            <h1>React.memo </h1>
            {name}
            <p>React.memo was introduce is react 16.6. This is also considered a higher order component:- React.memo (MemoComp)</p>
        </div>
    )
}


export default React.memo (MemoComp);

