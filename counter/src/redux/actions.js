// src/redux/actions.js
export const increment = () => ({
    type: 'INCREMENT',
  });
  
  export const decrement = () => ({
    type: 'DECREMENT',
  });
  
  export const setCounter = (value) => ({
    type: 'SET_COUNTER',
    payload: value,
  });
  