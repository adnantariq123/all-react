import React, { Component } from "react";

import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="nav">
              <li className="nav-item">
                <Link to="/ClassvsFun" className="nav-link">
                  Class vs Functional Components
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/Info" className="nav-link">
                  Information two
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/TechSith" className="nav-link">
                TechSith
                </Link>
              </li>              
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
