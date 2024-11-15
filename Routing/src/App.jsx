import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Question from "./components/Question";
import Result from "./components/Result";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Error from "./components/Error";
import Homepage from "./components/Homepage";
import BpscPage from "./components/BpscPage";
import Sscpage from "./components/Sscpage";
import ChaptersSakshamta from "./components/ChaptersSakshamta";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/bpsc" element={<BpscPage />} />
        <Route path="/BiharSsc" element={<Sscpage />} />
        <Route path="/question" element={<Question />} />
        <Route path="/result" element={<Result />} />
        <Route path="/about" element={<About />} />
        <Route path="/chapters/sakshamta" element={<ChaptersSakshamta />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
