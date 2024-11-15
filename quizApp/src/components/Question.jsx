import React, { useState } from "react";
import Questions from "../assets/DbQuestions";

function Question() {
  // defining states
  const [result, setResult] = useState("");
  const [questionNo, setQuestinNo] = useState(0);
  const [obtainedMarks, setObtainedMarks] = useState(0);
  const [totalMarks, setTotalMarks] = useState(Questions.length);

  //defining styles
  const buttonStyle = {
    margin: "10px",
    padding: "2px 50px",
    fontSize: "1rem",
    fontWeight: "bolder",
    backgroundColor: "#606a74",
    color: "white",
  };

  // defining functions
  // function for checking answer and setting result
  function check(event) {
    let tickedAns = event.target.value;
    const correctAns = Questions[0].answer;
    if (tickedAns == correctAns) {
      setObtainedMarks(obtainedMarks + 1);
      const resultElement = document.getElementById("result");
      resultElement.style.color = "green";
      setResult("congratulations ur answere is correct");
    } else {
      setResult("Wrong answere");
      const resultElement = document.getElementById("result");
      resultElement.style.color = "red";
    }
  }
  //function to clear checked option
  function clearChecked() {
    const tickedElement = document.getElementsByName("option");
    tickedElement.forEach((item) => {
      item.checked = false;
    });
  }
  // function for next question
  function handleNext() {
    console.log("next button clicked");
    setQuestinNo(questionNo + 1);
    clearChecked();
    setResult("");
  }
  function handlePrevious() {
    if (questionNo <= 0) {
      setQuestinNo(0);
    } else {
      setQuestinNo(questionNo - 1);
    }
    clearChecked();
    setResult("");
  }

  return (
    <>
      <div className="questionContainer">
        <div className="marks">
          <h1>
            Total marks: {obtainedMarks} / {totalMarks}
          </h1>
        </div>
        <div className="que">
          <span className="questionNum">Q no.- ( ) </span>
          <span className="questionBody">{Questions[questionNo].question}</span>
        </div>
        <div className="options" id="options">
          <div className="option">
            <input
              type="radio"
              name="option"
              id="1"
              className="option"
              value="1"
              // defaultChecked="false"
              onClick={check}
            />
            <label htmlFor="1">{Questions[questionNo].option1}</label>
          </div>
          <div className="option">
            <input
              type="radio"
              name="option"
              id="2"
              className="option"
              value="2"
              // defaultChecked={isCheckedRadio}
              onClick={check}
            />
            <label htmlFor="2">{Questions[questionNo].option2}</label>
          </div>
          <div className="option">
            <input
              type="radio"
              name="option"
              id="3"
              className="option"
              value="3"
              // defaultChecked={isCheckedRadio}
              onClick={check}
            />
            <label htmlFor="3">{Questions[questionNo].option3}</label>
          </div>
          <div className="option">
            <input
              type="radio"
              name="option"
              id="4"
              className="option"
              value="4"
              // checked="false"
              onClick={check}
            />
            <label htmlFor="4">{Questions[questionNo].option4}</label>
          </div>
        </div>
        {/* -------------------------------------------------------------------------- */}
        <div className="result">
          {" "}
          <h2 id="result"> {result}</h2>
        </div>
      </div>
      <div className="buttons" style={{ width: "100vw", display: "block" }}>
        <button style={buttonStyle} onClick={handlePrevious}>
          previous
        </button>
        <button style={buttonStyle} onClick={handleNext}>
          next
        </button>
        <button style={buttonStyle}>submit</button>
      </div>
    </>
  );
}

export default Question;
