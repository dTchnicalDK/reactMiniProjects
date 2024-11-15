import React from "react";
import axios from "axios";
import { useState } from "react";

function QuestionPanel() {
  const [question, setQuestion] = useState({});

  //fuction to retrieve data from all input fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setQuestion({
      ...question,
      [name]: value,
    });
  };
  //function to post data to send to backend and alert the response from backend
  const handleFeed = () => {
    const { option1, option2, option3, option4, que } = question;
    if (que && option1 && option2 && option3 && option4) {
      axios
        .post("http://localhost:3000/newfeed", question)
        .then((res) => {
          alert(res.data.message);
          //resetting input fields
          setQuestion({
            que: "",
            option1: "",
            option2: "",
            option3: "",
            option4: "",
          });
        })
        .catch((err) => alert(err));
    } else {
      alert("inappropriate data");
    }
  };
  return (
    <div>
      <h1>Feed the question below</h1>

      <input
        type="text"
        name="que"
        id=""
        placeholder="Enter question here"
        value={question.que}
        onChange={handleChange}
      />
      <hr />
      <input
        type="text"
        name="option1"
        id=""
        placeholder="Enter option A here"
        value={question.option1}
        onChange={handleChange}
      />
      <input
        type="text"
        name="option2"
        id=""
        placeholder="Enter option B here"
        value={question.option2}
        onChange={handleChange}
      />
      <input
        type="text"
        name="option3"
        id=""
        placeholder="Enter option C here"
        value={question.option3}
        onChange={handleChange}
      />
      <input
        type="text"
        name="option4"
        id=""
        placeholder="Enter option D here"
        value={question.option4}
        onChange={handleChange}
      />
      <button onClick={handleFeed}>submit</button>
    </div>
  );
}

export default QuestionPanel;
