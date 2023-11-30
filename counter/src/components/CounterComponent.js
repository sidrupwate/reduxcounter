// src/components/CounterComponent.js
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, setCounter } from '../redux/actions';

const CounterComponent = ({ counter, increment, decrement, setCounter }) => {
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = {
  increment,
  decrement,
  setCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
