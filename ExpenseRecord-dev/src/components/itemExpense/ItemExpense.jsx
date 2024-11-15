import "./ItemExpense.css";

export function ItemExpenses(props) {
  return (
    <>
      {props.data.map((itm) => (
        <div className="expenseDiv">
          <span className="date">{itm.date}</span>
          <span className="expense">{itm.expense}</span>
          <span className="amount">Rs. {itm.amount}</span>
        </div>
      ))}
    </>
  );
}
