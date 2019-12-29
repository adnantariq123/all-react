import React, { Component } from "react";

import { Link, useHistory } from "react-router-dom";

class NavBar extends Component {


 
  goBackHandle =() => {
    console.log("com");

  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="nav">
            <li className="nav-item">
                <Link to="/HOC" className="nav-link">
                  HOC!
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/Context" className="nav-link">
                Context
                </Link>
              </li>


              <li className="nav-item">
                <Link to="/ClassvsFun" className="nav-link">
                  Class vs Functional Components
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/PureVsRegComp" className="nav-link">
                  Pure Vs Reg Component
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/Hooks" className="nav-link">
                  Hooks
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/Info" className="nav-link">
                  General Information
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/TechSith" className="nav-link">
                TechSith
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ErrorHandling" className="nav-link">
                Error
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Forms" className="nav-link">
                Forms
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/Visual" className="nav-link">
                Visual
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/PersistedData" className="nav-link">
                Persisted Data
                </Link>
              </li>

              <li className="nav-item">
                <span className="nav-link" onClick={this.goBackHandle}>
                Back
                </span>
              </li>

            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
