import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import NavBar from "./Navigation/NavBar";

import ClassvsFun from "./Informative/ClassesandFunctionalComponents";
import Info from "./Informative/Information2";
import TechSithAgeCounter from './Builders/TechSith';
import Forms from './Builders/Forms';
import Visual from './Builders/Visual';



function Main() {
  return (


    <BrowserRouter>

      <NavBar />

      {/* components I will swtich will be placed inside */}
      <Switch>
        <Route path="/ClassvsFun" exact component={ClassvsFun}/>
        <Route path="/Info" component={Info}/>
        <Route path="/TechSith" component={TechSithAgeCounter}/>
        <Route path="/Forms" component={Forms}/>
        <Route path="/Visual" component={Visual}/>

      </Switch>
    </BrowserRouter>
  );
}

export default Main;



// import logo from './logo.svg';
// import './App.css';
