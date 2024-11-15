import React, { useState } from "react";
import { Link } from "react-router-dom";

function ChaptersSakshamta() {
  const [totalChapters, setTotalChapters] = useState(5);

  return (
    <div className="subject">
      <ul className="chapters">
        <li>
          <Link to="/dashboard">chapter 1 {totalChapters}</Link>
        </li>
        <li>
          <Link to="/dashboard">chapter 2</Link>
        </li>
        <li>
          <Link to="/dashboard">chapter 3</Link>
        </li>
        <li>
          <Link to="/dashboard">chapter 4</Link>
        </li>
        <li>
          <Link to="/dashboard">chapter 5</Link>
        </li>
      </ul>
    </div>
  );
}

export default ChaptersSakshamta;
