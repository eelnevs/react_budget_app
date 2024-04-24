import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);

  const changeCurrency = (val) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: val,
    });
  };

  return (
    <select
      className="form-select alert alert-success"
      id="currency"
      onChange={(event) => changeCurrency(event.target.value)}
      defaultValue={currency}
    >
      <option value="$" label="Currency ($ Dollar)"></option>
      <option value="£" label="Currency (£ Pound)"></option>
      <option value="€" label="Currency (€ Euro)"></option>
      <option value="₹" label="Currency (₹ Rupee)"></option>
    </select>
  );
};

export default Currency;
