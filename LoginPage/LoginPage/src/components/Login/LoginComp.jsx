import React from "react";
import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import HomepageComp from "../homepage/HomepageComp.jsx";
import { useHistory } from "react-router-dom";
import axios from "axios";

function LoginComp() {
  const history = useHistory();
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleLogin = async () => {
    const { email, password } = user;
    if (email && password) {
      try {
        const resMessage = await axios.post(
          "http://localhost:3000/login",
          user
        );
        alert(resMessage.data.message);
        <Routes>
          <Route path="/homepage" Component={HomepageComp} />
        </Routes>;
        history.push("/homepage");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("please enter email and password");
    }
  };
  return (
    <div>
      {/* {console.log(user)} */}
      <div className="logDiv">
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
        <button onClick={handleLogin}>Login</button>
        <h3>if not registered</h3>
        <button className="btn">
          <Link to={"/register"}>Register Here</Link>
        </button>
      </div>
    </div>
  );
}

export default LoginComp;
