import React from "react";
import AddNote from "./components/note/AddNote";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="homepage">
        <div className="nav">
          <h2>welcome to note provided by dharmendra</h2>
        </div>
        <div className="main">
          <div className="sidebar">
            <h3>sidebar</h3>
          </div>
          <div className="notesContainer">
            <button className="addNote">
              <Link to={"/addNote"}>Add New Note</Link>
            </button>
            notes container
          </div>
        </div>
      </div>

      {/* <AddNote /> */}
    </>
  );
}

export default App;
