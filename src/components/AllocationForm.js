import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const AllocationForm = (props) => {
  const { dispatch, remaining, currency } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [action, setAction] = useState("");

  const submitEvent = () => {
    if (cost > remaining) {
      alert("The value cannot exceed remaining funds $" + remaining);
      setCost("");
      return;
    }

    const expense = {
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: action,
      payload: expense,
    });
  };

  return (
    <div>
      <div className="row">
        <div className="input-group mb-3" style={{ marginLeft: "2rem" }}>
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Department
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            onChange={(event) => setName(event.target.value)}
          >
            <option defaultValue>Choose...</option>
            <option value="Marketing" name="marketing">
              Marketing
            </option>
            <option value="Sales" name="sales">
              Sales
            </option>
            <option value="Finance" name="finance">
              Finance
            </option>
            <option value="Human Resource" name="hr">
              HR
            </option>
            <option value="IT" name="it">
              IT
            </option>
            <option value="Admin" name="admin">
              Admin
            </option>
          </select>

          <div className="input-group-prepend" style={{ marginLeft: "2rem" }}>
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Allocation
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect02"
            onChange={(event) => setAction(event.target.value)}
          >
            <option defaultValue>Choose...</option>
            <option value="ADD_EXPENSE" name="Add">
              Add
            </option>
            <option value="RED_EXPENSE" name="Reduce">
              Reduce
            </option>
          </select>

          <div
            style={{ marginLeft: "2rem", marginRight: "0.5rem", fontSize: 20 }}
          >
            {currency}
          </div>
          <input
            required="required"
            type="number"
            step={10}
            id="cost"
            value={cost}
            style={{ size: 10 }}
            onChange={(event) => setCost(event.target.value)}
          ></input>

          <button
            className="btn btn-primary"
            onClick={submitEvent}
            style={{ marginLeft: "2rem" }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllocationForm;
