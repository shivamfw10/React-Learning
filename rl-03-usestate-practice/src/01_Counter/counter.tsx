import "./counter.css";
import "../style.css";

import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
     <section className="section-box">
      <h2>Simple Counter</h2>
      <p>Create a basic counter using the useState hook. Implement buttons to increment and decrement the counter value.</p>
      <p>Counter: {count}</p>
      <div className="card">
        <button onClick={decrementCount}>-</button>
        <button onClick={incrementCount}>+</button>
      </div>
    </section>
  );
}
export default Counter;