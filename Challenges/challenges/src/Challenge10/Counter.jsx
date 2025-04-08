import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementBy } from "./redux/counterReducer";
import { useState } from "react";

const Counter = () => {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [customAmount, setCustomAmount] = useState(0);

  return (
    <div>
      <h2>Contador: {value}</h2>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>

      <div className="mt-4">
        <input
          type="number"
          value={customAmount}
          onChange={(e) => setCustomAmount(Number(e.target.value))}
          placeholder="Incrementar por"
        />
        <button onClick={() => dispatch(incrementBy(customAmount))}>
          Incrementar por valor
        </button>
      </div>
    </div>
  );
};

export default Counter;
