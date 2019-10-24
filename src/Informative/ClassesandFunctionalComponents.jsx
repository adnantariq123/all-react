import React from "react";

const Simple = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Class vs Functional components</h1>

          <p>React lets you define components as classes or functions. Components defined as classes currently provide more features. To define a React component class, you need to extend React.Component:</p>
          <h3>Class components</h3>
          <p>Each component has several “lifecycle methods” that you can override to run code at particular times in the process. </p>
          <p>
            -in class component you have to import React, [ Component ] from
            'react';
        </p>
          <p>
            -You have a RENDER method () [ and <b>inside</b> that the RETURN
            Method ]
        </p>
          <p>
            - in the class component the props are automatically avalaible ( from
            the parent component) you can get them via this.props.WHATEVERNAMEHERE
          - must match the parent{" "}
          </p>

          <p>
            Where/Why do should you use them? whenver you have to mantian a state
            use a Class component
        </p>
        </div>

        <div className="col-12">
          <h3>Functional Components</h3>

          <p>these are stateless components <i>...... well that now has changed thanks to hooks like useState</i> </p>
          <p>-in function component you DO NOT have to import React, [ Component ] from 'react';</p>
          <p>-You DO NOT have a RENDER method.. you just have the RETURN Method with your logic</p>
          <p>- in functional component you HAVE to DEFINE or pass props as an arguement the function takes then it is avalaible
  here for example User = (props) => AND when using them you DON't have to do this.props... just use props.WHATEVERNAME</p>

          <p>Where/Why do should you use them? use the ES6 function components as much as possible.. but you 'cannot'.. or should not mantain state here
functional components `might` not have a way to define a state</p>
        </div>

        
      </div>
    </div>
  );
};

export default Simple;
