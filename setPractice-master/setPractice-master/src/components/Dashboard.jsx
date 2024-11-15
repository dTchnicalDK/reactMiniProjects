import React from "react";
import "../assets/css/dashboard.css";
import { NavLink } from "react-router-dom";
function Dashboard() {
  return (
    <div>
      <ol className="lists">
        <li>1. Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>2. Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>3. Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>4. Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>5. Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      </ol>
      <form className="userForm">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter your user name*"
        />

        <NavLink to="/question">
          {" "}
          <button type="submit">Log in </button>
        </NavLink>
      </form>
    </div>
  );
}

export default Dashboard;
