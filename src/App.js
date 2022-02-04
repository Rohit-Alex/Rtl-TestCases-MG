import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { DemoCounterProvider } from "./Context/DemoContex";
import DemoCounter from "./Components/DemoCounter";
import 'antd/dist/antd.css';
import Search from "./Components/Search";
import MoveSections from "./Components/MoveSections";

function App() {

  const myState = useSelector(state => state.todoReducer)
  const dispatch = useDispatch()
  const handleSearch = (a, b) => {
    const { startDate, endDate } = b
    const startDateInModified = new Date(startDate)
    startDateInModified.setUTCHours(0,0,0,0)
    console.log(startDateInModified.toISOString())
  }
  return (
    <div className='App' data-testid="data-container" >
      
      <MoveSections />
    </div>
  );
}

export default App;
