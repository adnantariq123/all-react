import React, { useState, useEffect } from "react";
import {useLocation} from 'react-router-dom';
import Lorem from './LoreumIpson';

//  following the https://www.youtube.com/watch?v=d9Pndaq9MJs example




const Inform = () => {

  const[cartItems, setCartItems] = useState([]);

  //this did NOt need an array
  const[showLorem, setShowLorem] = useState(false);

  // even the scroll goes to the state and we update that with. Note: useState(0) could have been useState(100)... 
  //that would just set the intial value of the scrollDepth to be 100
  const[scrollDepth, setScrollDepth] = useState(0);

  // this function's purpose is to find the scroll location, then simply pass it to setScrollDepth() which updates the state
  function scrollLocater () {
      const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
      setScrollDepth(scrolled)
  }

  // and where is where we call that function scrollLocater.. COOL
  useEffect(()=>{
    window.addEventListener('scroll', scrollLocater );
  })

  const located = useLocation();

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12">
          <h1>DESTRUCTURING props</h1>
            <p>
              
          render() &lcub;<br/>
          FOLLOWING <br/>
          const &lcub;PName, PNum, balance, participation&rcub; = this.props; <br/>
          is the same as :<br/>
          this.props.PName<br/>
          this.props.PNum<br/>
          this.props.balance<br/>
          this.props.participation<br/>
          this is called <b>DESTRUCTURING props</b> and this could have also been done with states if required<br/>
          
          const &lcub;PName, PNum, balance, participation&rcub; = this.props;<br/>
          </p>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row">
          <div className="col-12">
          <h1>What are Keys in react/ or in .js</h1>
          <p>"key" is a special string attribute you need to include when creating a list of elements... typically we use the .map function to make this list. Key give the element a stable identity, it has to be <b>unique</b>. Key help React identify which item have changed/added/ or removed. They help react/.js identify the items of the list generated.</p>
          <p>in the "unlikely" event that we do NOt have a unique identifier to be used as the key. we can use the <u>index</u> parameter while using the map. However this isn't alwasy the best appraoch, and if at all should be avoided</p>
  <p> names.map((xyz, <span className="alert-danger">index</span>)=> &lt;h2 key=index&gt; whatever &lt;/h2&gt;)</p>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row">
          <div className="col-12">
          <h1>Methods are PROPS</h1>
          <p>Just like you can send a <b>props</b> from a parent to a child component <i>this.props.name</i> . You can also <b>send functions from parent to child component</b> using <i>this.props.functionName</i>. This would be a great example of using one main parent to house all the required functionality in all respective children components??</p>

            </div>
          </div>
        </div>     
        


      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>useState {located.pathname}</h1>
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

            <br></br>
            <p>Scroll location: {scrollDepth}</p>

          </div>

        </div>
      </div>

      <br></br>
      {showLorem ? <Lorem/> :null}


    </React.Fragment>
  );
};

export default Inform;
