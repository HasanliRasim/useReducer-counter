import React from "react";

const Home = () => {
  const buttons = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
  };

  const reducerFunction = (state, action) => {
    const { type, payload } = action;

    switch (type) {
      case buttons.DECREMENT:
        return { ...state, count: state.count - payload };
      case buttons.INCREMENT:
        return { ...state, count: state.count + payload };
      default:
        return state; 
    }
  };

  const [state, dispatch] = React.useReducer(reducerFunction, { count: 0 });

  return (
    <div>
      <div>
        <button onClick={() => dispatch({ type: buttons.DECREMENT, payload: 1 })}>
          Decrement
        </button>
        <span>current: {state.count}</span>
        <button onClick={() => dispatch({ type: buttons.INCREMENT, payload: 1 })}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default Home;
