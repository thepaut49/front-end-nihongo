import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: "orange" };

  return (
    <nav>
      <NavLink activeStyle={activeStyle} to="/" exact>
        Home
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/kanjis">
        Kanjis
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/verbs">
        Verbs
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/naAdjectives">
        Na adjectives
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/iAdjectives">
        I adjectives
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/names">
        Names
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/words">
        Words
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/about">
        About
      </NavLink>
    </nav>
  );
}

export default Header;
