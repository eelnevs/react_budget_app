import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, currency, dispatch } = useContext(AppContext);
  const handleBudgetChange = (event) => {
    dispatch({
      type: "SET_BUDGET",
      payload: event.target.value,
    });
  };
  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency} </span>
      <input
        type="number"
        step="10"
        value={budget}
        onChange={handleBudgetChange}
        max="20000"
      ></input>
    </div>
  );
};

export default Budget;
