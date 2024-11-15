import React, { useEffect, useState } from "react";
import axios from "axios";
import "../CreateUser/CreateUser.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

function EditUser() {
  const users = {
    fname: "",
    lname: "",
    email: "",
  };
  const [user, setUser] = useState(users);
  const navigate = useNavigate();
  const { id } = useParams(); // supplies id from url

  // getting data of user to be edited with it's id;
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/findOne/${id}`)
      .then((response) => {
        setUser(response.data.exitUser);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  //storing user new data from edit field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  // sending new data of user's to database
  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:3000/api/edit/${id}`, user)
      .then((res) => {
        console.log(res.data);
        navigate("/home");
        toast.success(res.data.msg);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="createUserFormDiv">
      <Link to={"/home"}>
        <p>back</p>
      </Link>
      <div className="formTitle">
        <h3>Edit user details !</h3>
      </div>
      <form onSubmit={submitForm}>
        <div className="fname input">
          <label htmlFor="fname">Enter your First Name</label>
          <input
            type="text"
            name="fname"
            id="fname"
            value={user.fname}
            onChange={handleChange}
          />
        </div>
        <div className="lname input">
          <label htmlFor="fname">Enter your Last Name</label>
          <input
            type="text"
            name="lname"
            id="lname"
            value={user.lname}
            onChange={handleChange}
          />
        </div>
        <div className="email input">
          <label htmlFor="fname">Enter your Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="submit input">
          <button type="submit">submit now</button>
        </div>
      </form>
    </div>
  );
}

export default EditUser;
