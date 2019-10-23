import React, { Component } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import NavBar from "./NavigationandDumbComponent/NavBar";

import ClassvsFun from "./Informative/ClassesandFunctionalComponents";
import Info from "./Informative/Information2";



function Main() {
  return (


    <BrowserRouter>

      <NavBar />

      {/* components I will swtich will be placed inside */}
      <Switch>
        <Route path="/ClassvsFun" exact component={ClassvsFun}/>
        <Route path="/Info" component={Info}/>

      </Switch>
    </BrowserRouter>
  );
}

export default Main;



// import logo from './logo.svg';
// import './App.css';
