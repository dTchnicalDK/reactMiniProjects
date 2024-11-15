import React from "react";
import "./Register.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reenteredPassword: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  }
  function newRegistration() {
    const { name, email, password, reenteredPassword } = user;
    if (name && email && password && reenteredPassword) {
      if (password === reenteredPassword) {
        axios.post("http://localhost:3000/register", user).then((res) => {
          alert(res.data.message);
        });
      } else {
        alert("both password are not same, reEnter");
      }
    } else {
      console.log("invalid input/inputs");
    }
  }
  return (
    <>
      <div className="regDiv">
        {/* {console.log(user)} */}
        <h3>Register here</h3>
        <input
          type="text"
          placeholder="enter your name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Enter your valid email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter ur password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Retype ur password"
          name="reenteredPassword"
          value={user.reenteredPassword}
          onChange={handleChange}
        />
        <button onClick={newRegistration}>submit</button>
        <h3>already registered</h3>
        <button>
          <Link to={"/login"}>Log in here </Link>
        </button>
      </div>
    </>
  );
}

export default Register;
