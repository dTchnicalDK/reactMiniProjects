import { useState } from "react";
import "./App.css";
import Question from "./components/Question";
import UserDetails from "./components/UserDetails";
import Numbers from "./components/Numbers";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="heading">
        <h1>सक्षमता परीक्षा बिहार</h1>
      </div>
      <div className="main">
        <div className="questions">
          <Question />
        </div>
        <div className="sidebar">
          <UserDetails />
          <Numbers />
        </div>
      </div>
    </>
  );
}

export default App;
