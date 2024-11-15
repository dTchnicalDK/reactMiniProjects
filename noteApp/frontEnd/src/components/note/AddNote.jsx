import "./AddNote.css";
import { useState } from "react";
import React from "react";
import { useNavigate, Link } from "react-router-dom";

function AddNote() {
  let data = {
    title: "",
    content: "",
  };

  const [noteData, setNoteData] = useState(data);
  const navigate = useNavigate();
  // console.log(data);
  const handlechange = (e) => {
    e.preventDefault();
    console.log("handle change running");
    navigate("/addNote");
  };

  return (
    <div>
      <form className="container">
        <Link to={"/home"}>home</Link>
        <div className="note">
          <div className="title">
            <input
              type="text"
              placeholder=" write title here"
              value={noteData.title}
              onChange={handlechange}
            />
            <button className="save" type="submit">
              save
            </button>
          </div>
          <div className="content">
            <textarea
              name="content"
              id="contentField"
              rows={30}
              cols={50}
              value={noteData.content}
              onChange={handlechange}
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddNote;
