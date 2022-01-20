import React from "react";
import "./App.css";
import { ClipLoader } from "react-spinners";

import { useCounterContext } from "./Context/Counter";
import One from "./components/one";
import { useSelector, useDispatch } from "react-redux";
import { updateGreetingsMessage } from "./redux/actions/greetingsAction";

function App() {
  const { count, increment, isLoading, apiData, greetings } = useCounterContext()
  const myState = useSelector(state => state.todoReducer)
  const dispatch = useDispatch()
  dispatch(updateGreetingsMessage(greetings('Rohit')))
  if (isLoading) return <ClipLoader loading={isLoading} size={150} data-testid="spinner-container" />
  return (
    <div className={`App${isLoading}`} data-testid="data-container" >
      {apiData.map((todo, index) =>
        <div data-testid={`todo-container-${index}`} key={todo.id}>
          <div>
            title: {todo.title}
          </div>
          <div>userId: {todo.userId}</div>
        </div>
      )}
      <div style={{ height: '23px' }}>
        <h1>This is counter app</h1>
        <div id="counter-value">{count}</div>
        <button id="increment-btn" onClick={increment}>
          Increment
        </button>
      </div>
        <One />

    </div>
  );
}

export default App;
