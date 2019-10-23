import React, { Component } from "react";

import { Link } from "react-router-dom";

class NavBar extends Component {

  render() {
    return (
      <ul className="nav">
        <li className="nav-item">
          <Link to='/ClassvsFun' className="nav-link" >
            Class vs Functional Components
          </Link>
        </li>

        <li className="nav-item">
          <Link to='/Info' className="nav-link" >
            Information two
          </Link>
        </li>

      </ul>
    );
  }
}

export default NavBar;
