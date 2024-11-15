import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/navBar.css";

function NavBar() {
  return (
    <div className="nav-div">
      <div className="logo">
        <h1>dk</h1>
      </div>
      <ul className="list-items">
        <li>
          {" "}
          <NavLink
            to="/"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#fff" : "",
              color: isActive ? "red" : "white ",
              fontSize: isActive ? "15px" : " ",
              textDecoration: isActive ? "none" : "normal",
              fontWeight: isActive ? "bold" : "normal",
              borderRadius: isActive ? "15px" : "",
              padding: isActive ? "5px" : "",
              boxShadow: isActive ? "2px 2px 2px black" : "",
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/dashboard"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#fff" : "",
              color: isActive ? "red" : "white ",
              fontSize: isActive ? "15px" : " ",
              textDecoration: isActive ? "none" : "normal",
              fontWeight: isActive ? "bold" : "normal",
              borderRadius: isActive ? "15px" : "",
              padding: isActive ? "5px" : "",
              boxShadow: isActive ? "2px 2px 2px black" : "",
            })}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#fff" : "",
              color: isActive ? "red" : "white ",
              fontSize: isActive ? "15px" : " ",
              textDecoration: isActive ? "none" : "normal",
              fontWeight: isActive ? "bold" : "normal",
              borderRadius: isActive ? "15px" : "",
              padding: isActive ? "5px" : "",
              boxShadow: isActive ? "2px 2px 2px black" : "",
            })}
          >
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
