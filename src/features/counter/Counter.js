import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;
  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  return (
    <div>
      <div className="container">
        <div className="parent">
          <div className="buttons">
            <p className="value">{count}</p>
            <button className="button" onClick={() => dispatch(increment())}>
              +
            </button>
            <button className="button" onClick={() => dispatch(decrement())}>
              -
            </button>
          </div>
          <div className="input">
            <input
              type="text"
              value={incrementAmount}
              onChange={(e) => setIncrementAmount(e.target.value)}
            />
            <button className="button" onClick={resetAll}>Reset</button>
            <button
              className="button"
              onClick={() => dispatch(incrementByAmount(addValue))}
            >
              Add Amount
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
