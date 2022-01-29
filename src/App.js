import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { DemoCounterProvider } from "./Context/DemoContex";
import DemoCounter from "./Components/DemoCounter";
import 'antd/dist/antd.css';

function App() {

  const myState = useSelector(state => state.todoReducer)
  const dispatch = useDispatch()

  return (
    <div className='App' data-testid="data-container" >
      <DemoCounterProvider>
        <DemoCounter />
      </DemoCounterProvider>
    </div>
  );
}

export default App;
