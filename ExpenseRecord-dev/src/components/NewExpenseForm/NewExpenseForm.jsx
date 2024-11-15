import { useState } from "react";
import "./NewExpenseForm.css";

// importing components
export function NewExpenseForm(props) {
  const [particularValue, setParticularValue] = useState(" ");
  const [amountValue, setAmountValue] = useState(" ");
  const [dateValue, setDateValue] = useState(" ");

  //defining input form events and collecting data
  const paticularChangeHandler = (event) => {
    setParticularValue(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmountValue(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDateValue(new Date(event.target.value).toDateString());
  };
  //function for submit forms
  const onSubmitHandler = () => {
    const inputData = {
      expense: particularValue,
      amount: amountValue,
      date: dateValue,
      id: Math.random(),
      key: "id",
    };
    //calling function to send data to app.jsx
    props.data(inputData);

    //clearing fields after submit
    setParticularValue(" ");
    setAmountValue(" ");
    setDateValue(" ");
  };
  return (
    <div className="formDiv">
      <h2 className="inputTitle"> insert your expenses from here</h2>
      <div className="inputDiv">
        <form action="/#" onSubmit={onSubmitHandler}>
          <input
            type="text"
            value={particularValue}
            placeholder="particulars"
            onChange={paticularChangeHandler}
          />
          <input
            type="number"
            value={amountValue}
            placeholder="amount"
            onChange={amountChangeHandler}
          />
          <input type="date" value={dateValue} onChange={dateChangeHandler} />
          <input type="submit" value="Add expenses" />
        </form>
      </div>
    </div>
  );
}
