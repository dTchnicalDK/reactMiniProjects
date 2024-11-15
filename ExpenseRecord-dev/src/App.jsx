import React, { useState } from "react";
import "./App.css";

// imported components
import { ItemExpenses } from "./components/itemExpense/ItemExpense";
import { NewExpenseForm } from "./components/NewExpenseForm/NewExpenseForm";
import DUMMY_DATA from "./offlineData/offlineData.jsx";

function App() {
  const [data, setData] = useState(DUMMY_DATA);
  // retrieving data filled in expense forms
  function inputDataCall(inutDataFromForm) {
    setData([inutDataFromForm, ...data]);
  }

  return (
    <div className="App">
      <NewExpenseForm data={inputDataCall} />

      <ItemExpenses data={data} />
    </div>
  );
}

export default App;
