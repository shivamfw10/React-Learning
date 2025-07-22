import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { increment, decrement, incrementByAmount, reset } from '../store/slices/counterSlice';
import './Counter.css';

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState(5);

  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <div className="counter-buttons">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
      <div className="counter-amount">
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
        />
        <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>
          Add Amount
        </button>
      </div>
    </div>
  );
};

export default Counter;
