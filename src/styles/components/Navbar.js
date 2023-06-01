import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <NavLink to="/" >
          <li>Accueil</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
