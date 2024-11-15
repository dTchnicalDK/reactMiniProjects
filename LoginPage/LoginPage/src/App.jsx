import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Register from "./components/register/Register";
import LoginComp from "./components/Login/LoginComp";
import HomepageComp from "./components/homepage/HomepageComp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/home" Component={HomepageComp} />
          <Route path="/register" Component={Register} />
          <Route path="/login" Component={LoginComp} />
        </Routes>
      </div>
    </>
  );
}

export default App;
