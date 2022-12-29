import React, { useState } from 'react';
const Counter = () => {
  const [counter, setCounter] = useState(null);

  const increase = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <button onClick={increase}>Click me!</button>
      <h1>Current count: {counter}</h1>
    </>
  );
};
export default Counter;
