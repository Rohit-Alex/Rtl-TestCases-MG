import React, { useState } from "react";
import "./App.css";
// import { useSelector, useDispatch } from "react-redux";
import 'antd/dist/antd.css';

import { DemoCounterProvider } from "./Context/DemoContex";
import ExpandableTable from "./Components/ExpandableTable";
import DataGridDemo from "./DataGrid";

function App() {
  const [searchBy, setSearchBy] = useState('')
  const [helperFlag, setHelperFlag] = useState(false)
  // const myState = useSelector(state => state.todoReducer)
  // const dispatch = useDispatch()
  // const handleSearch = (a, b) => {
  //   const { startDate, endDate } = b
  //   const startDateInModified = new Date(startDate)
  //   startDateInModified.setUTCHours(0,0,0,0)
  //   console.log(startDateInModified.toISOString())
  // }
  return (
    <div className='App' data-testid="data-container" >
      <DemoCounterProvider>

     
      {/* <DebounceMethod />
      <MoveSections /> */}
      {/* <One /> */}
      {/* <div onClick={() => setSearchBy('date-range')} data-testid="date-range">Date range</div>
      {<SearchFilter1 />} */}
      {/* <Nirali />
      <Drpdwn columnList={[
        { dataIndex: "one", title: "one", key: "1" },
        { dataIndex: "two", title: "two", key: "2" },
        { dataIndex: "three", title: "three", key: "3" }
      ]}/> */}
      {/* <DemoCounter /> */}
      <ExpandableTable />
      </DemoCounterProvider>
          {/* <Issues/> */}
      <DataGridDemo />
    </div>
  );
}

export default App;
