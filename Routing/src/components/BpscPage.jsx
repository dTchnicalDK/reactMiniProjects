import React from "react";
import Questions from "../assets/QuestionsDbs/DbQuestions";
import TestPortal from "./TestPortal";

function BpscPage() {
  return (
    <div>
      <h1>hi from bpsc page</h1>
      <TestPortal
        Questions={[
          {
            question: "this is the questin",
            option1: "option1",
            option2: "option2",
            option3: "option3",
            option4: "option4",
            answere: "2",
          },
        ]}
      />
    </div>
  );
}

export default BpscPage;
