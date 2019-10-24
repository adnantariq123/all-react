import React, { useState, useEffect } from "react";

import Lorem from './LoreumIpson';

//  following the https://www.youtube.com/watch?v=d9Pndaq9MJs example


const Inform = () => {

  const[cartItems, setCartItems] = useState([]);

  //this did NOt need an array
  const[showLorem, setShowLorem] = useState(false);

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>useState </h1>
          </div>

          <div className="col-2">

          </div>
          <div className="col-4">
            <p><i>"the wired thing is you cannot use Hooks inside a <b>class</b>..."</i> so this was made using a functional component</p>
          </div>

        </div>

        <div className="row">
          <div className="col-12">
            <p><b>What is a Hook?</b> A Hook is a special function that lets you “hook into” React features. For example, <b>useState</b> is a Hook that lets you add React state to function components.</p>

            <p><b>When would I use a Hook?</b> If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component.</p>

            <p>What does calling useState do? It declares a “state variable”.</p>
          </div>
        </div>


      </div>


      <div className="container">
        <div className="row">
          <div className="col-12">

            <p>Purposely not using the Redux in this example. trying with a local state using 'useState' hook</p>
            {/* because cartItems is an array/object... we just wanrt to see the dam text  */}
            <p>cart: {cartItems.toString()}</p>


            <button onClick={()=>{setCartItems([...cartItems, 'apple'])}}>Add apples</button>
            <br></br>
            {/* ************* VERY CAREFUL ***************
            notice the difference between these two function and how we are calling them! */}

            <button onClick={()=>{setShowLorem(showLorem => !showLorem)}}>lets add some Lorem Ipson</button>
          </div>

        </div>
      </div>

      <br></br>
      {showLorem ? <Lorem/> :null}


    </React.Fragment>
  );
};

export default Inform;
