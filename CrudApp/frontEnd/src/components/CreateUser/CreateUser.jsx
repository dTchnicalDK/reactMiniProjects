import React, { useState } from "react";
import "./CreateUser.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function CreateUser() {
  const formInputData = {
    fname: "",
    lname: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(formInputData);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/create", user)
      .then((response) => {
        console.log(response);
        toast.success(response.data.msg, { position: "top-right" });
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="createUserFormDiv">
      <span className="home">
        <Link to={"/home"}> Home</Link>
      </span>
      <div className="formTitle">
        <h3>Register New user !</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="fname input">
          <label htmlFor="fname">Enter your First Name</label>
          <input type="text" name="fname" id="fname" onChange={handleChange} />
        </div>
        <div className="lname input">
          <label htmlFor="fname">Enter your Last Name</label>
          <input type="text" name="lname" id="lname" onChange={handleChange} />
        </div>
        <div className="email input">
          <label htmlFor="fname">Enter your Email</label>
          <input type="text" name="email" id="email" onChange={handleChange} />
        </div>
        <div className="pwd input">
          <label htmlFor="password">Enter your Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
        </div>
        <div className="submit input">
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
