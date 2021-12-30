import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import One from './components/one';
import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import md5 from 'md5'
import axios from 'axios';


function App() {
  const [countryName, setCountryName] = useState('')
  const [boardData, setBoardData] = useState([])
  const [showDetails, setShowDetails] = useState([])

  useEffect(() => {
    fetchBoardData()
  }, [])

  const toggleArrow = (index) => {
    console.log('clicked')
    const list = [...showDetails];
    list[index] = { ...list[index], toShowBoard: !list[index].toShowBoard };
    setShowDetails([...list]);
  }

  const fetchBoardData = async () => {
    let data1 = {
      action: "get_emp_details",
      apikey: "2DA990760448F6117F5EE173E",
      checksum: "6da93eef09dd7105291c09d6cde4ed1d",
      emp_code: "a43f9427-f4ea-4025-9ba7-1fe0d131fe48",
      internal_user_id: "10674034",
      refresh_token: "d070e61a-16ec-438d-b5de-9e53b7f296f9",
      school_id: "17250"
    };

    const { data } = await axios({
      url: 'https://emstage.extramarks.com/api/v1.0/studentappdashboard?get_emp_details',
      method: "POST",
      data: data1,
    })
    console.log(data)
    setBoardData(data.board_details)
  }

  function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
    e.dataTransfer.setData("parentClass", e.target.parentNode.className);
  }

  function drop(e) {
    e.preventDefault();

    let draggableID = e.dataTransfer.getData("text");
    let draggable = document.getElementById(draggableID);
    let clonedNode = draggable.cloneNode(true);
    draggable.setAttribute("draggable", "false");
    let container = document.getElementsByClassName("progress-list")[0];
    container.appendChild(clonedNode);
  }

  function allowDrop(e) {
    e.preventDefault();
  }

  return (
    <Router>
    <div className="App">
      <Header />
      <div className="flex">
          <Sidebar className="w-1/6"/>
          <div className="w-5/6">
            <TextField id="standard-basic" label="Country" variant="outlined" placeholder='Enter country' value={countryName} onChange={(e) => setCountryName(e.target.value)}/>
          </div>
      </div>
      <div className="Drag-container">
        <div className="left-section-container">
          <div className="board-container">
            <h4>Board</h4>
            {boardData.map((board, boardIndex) => (
              <>
                {showDetails?.[boardIndex]?.toShowBoard ?
                <div 
                  className="board-child"
                  draggable
                  onDragStart={drag}
                  onClick={() => toggleArrow(boardIndex)}
                  id={board.board_id}>
                <h2>{board.board_name}</h2>
                  <div className='class-container'>
                    <h4>Class</h4>
                    {board.class_details.map(classes => (
                        <div
                          className='class-child'
                          draggable
                          onDragStart={drag} 
                          id={classes.class_id}>
                          <h2>{classes.class_name}</h2>
                          <div className='section-container'>
                            <h4>Sections</h4>
                            {classes.section_details.map(sections => (
                              <>
                                <div
                                  draggable
                                  onDragStart={drag}
                                  id={sections.section_id}
                                >
                                  <h4>{sections.section_name}</h4>
                                </div>
                              </>
                            ))}
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
                  : <div onClick={() => toggleArrow(boardIndex)}>[{}]</div>}
              </>
            ))}
          </div>
        </div>
        <div className="progress" onDrop={drop} onDragOver={allowDrop}>
          <h3 className="progress-heading">Progress</h3>
          <div className="progress-list"></div>
        </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
