import { useState } from 'react';
import './Counter.css';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { decrement, increment, incrementByAmount, reset } from '../store/slices/counterSlice';

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
