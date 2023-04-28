import React from "react";

import { NavLink } from "react-router-dom";

import "./index.css";

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink className="site-logo" to="/">
            #VanLife
          </NavLink>
          <NavLink className="navlink" to="/about">
            About
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;
