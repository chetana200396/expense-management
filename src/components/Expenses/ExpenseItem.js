import Reacr, { useState } from "react";

// component is javascrip function in react

//indentation - Shift + Option + F
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

//Arrow function
//const ExpenseItem = (props) =>{
// }

function ExpenseItem(props) {
  //First current state value and then new value
  const [title, setTitle] = useState(props.title); // Hooks -> only called inside react function and cannot called inside nested functions

  const clickHandlers = () => {
    setTitle("Updated"); // Assign new value
    console.log("updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandlers}></button>
    </Card>
  );
}

export default ExpenseItem;
