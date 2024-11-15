import React, { useEffect, useState } from "react";
import axios from "axios";
import "./homePage.css";
import { Link, useNavigate } from "react-router-dom";
import { IoTrashBin } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import toast from "react-hot-toast";

function HomePage() {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  // useEffect to fetch data from MongoDb of all users and set that data to userData variable;
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/getAll");
        setUserData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [userData]);

  // function to deal with deleting user
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/api/delete/${id}`)
      .then((response) => {
        toast.success(response.data.msg);
        //filering the deleted data from previous data and re-render;
        return userData.filter((data) => {
          data._id !== id;
        });
      })
      .catch((error) => console.log(error));
    console.log(id);
  };

  return (
    <div className="tableContainer">
      <Link to={"/create"}>
        <div className="addUser">
          <h3>Add New User</h3>
        </div>
      </Link>

      <table className="userTable">
        <caption>Registered users</caption>

        <thead>
          <tr>
            <th>Sl. No.</th>
            <th>user first name</th>
            <th>user last name</th>
            <th colSpan={3}>email id</th>
          </tr>
        </thead>
        <tbody>
          {/* mapping the table body with data from server */}
          {userData.map((data, index) => {
            return (
              <tr key={data._id}>
                <td key={data._id + "sl"}>{index + 1}</td>
                <td key={data._id + "fname"}>{data.fname}</td>
                <td key={data._id + "lastName"}>{data.lname}</td>
                <td key={data._id + "email"}>{data.email}</td>
                <td key={data._id + "edit"}>
                  {" "}
                  <Link to={`/edit/${data._id}`}>
                    <button className="editBtn">
                      <FaRegEdit />
                    </button>
                  </Link>
                </td>
                <td key={data._id + "delete"}>
                  <button
                    className="deleteBtn"
                    onClick={() => {
                      handleDelete(data._id);
                    }}
                  >
                    {" "}
                    <IoTrashBin />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;
