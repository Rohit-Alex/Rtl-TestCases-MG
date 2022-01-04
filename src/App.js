import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RightSection from './components/RightSection';
import { ClipLoader } from 'react-spinners';
import One from './components/one'


function App() {
  const [boardData, setBoardData] = useState([])
  const [showDetails, setShowDetails] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchBoardData()
  }, [])

  const toggleArrow = (index) => {
    const list = [...showDetails];
    list[index] = { ...list[index], toShowBoard: !list?.[index]?.toShowBoard };
    setShowDetails([...list]);
  }

  const toggleClass = (boardIndex, classIndex, event) => {
    event.stopPropagation()
    const list = [...showDetails];
    const classDetailsToShow = [...list?.[boardIndex]?.classDetailsToShow ?? []]
    classDetailsToShow[classIndex] = { ...classDetailsToShow[classIndex], toShowClass: !classDetailsToShow?.[classIndex]?.toShowClass }
    list[boardIndex] = { ...list[boardIndex], classDetailsToShow };
    setShowDetails([...list])
  }

  const toggleSections = (boardIndex, classIndex, sectionIndex, event) => {
    event.stopPropagation()
    const list = [...showDetails];
    const sectionsDetailsToShow = [...list?.[boardIndex]?.classDetailsToShow?.[classIndex]?.sectionsDetailsToShow ?? []]
    sectionsDetailsToShow[sectionIndex] = { ...sectionsDetailsToShow[sectionIndex], toShowSections: !sectionsDetailsToShow?.[sectionIndex]?.toShowSections }
    const updatedClassIndexObject = { ...list?.[boardIndex]?.classDetailsToShow?.[classIndex], sectionsDetailsToShow }
    list[boardIndex].classDetailsToShow[classIndex] = updatedClassIndexObject
    setShowDetails([...list])
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
    setBoardData(data.board_details)
    setIsLoading(false)
  }

  function dragStart(e) {
    console.log(e.dataTransfer.effectAllowed, 'effect')
    e.dataTransfer.setData("text", e.target.id);
    e.dataTransfer.setData("parentClass", e.target.parentNode.className);
    e.dataTransfer.effectAllowed = "copy";
  }


  return (
    <Router>
      <div className="App">
        <Header />
        {isLoading ? <ClipLoader loading={isLoading} size={150} /> : <One /> }
        <div className="Drag-container">
          <div className="left-section-container">
            <h4 className="board-container">Board</h4>
            {boardData.map((board, boardIndex) => (
              <div draggable
                onDragStart={dragStart} onClick={(e) => toggleArrow(boardIndex)}>
                <div style={{ display: 'flex' }}>
                  {showDetails?.[boardIndex]?.toShowBoard ?
                    <div
                      className="board-child"
                      id={board.board_id}>
                      <h2>{board.board_name}</h2>
                      <div className='class-container'>
                        {board.class_details.map((classes, classIndex) => (
                          <div onClick={(event) => toggleClass(boardIndex, classIndex, event)} style={{ display: 'flex' }} draggable
                            onDragStart={dragStart}
                            id={classes.class_id}>
                            {showDetails?.[boardIndex]?.classDetailsToShow?.[classIndex]?.toShowClass ?
                              <div
                                className='class-child'
                              >
                                <h2>{classes.class_name}</h2>
                                <div className='section-container'>
                                  {classes.section_details.map((sections, sectionIndex) => (
                                    <div onClick={(e) => toggleSections(boardIndex, classIndex, sectionIndex, e)} style={{ display: 'flex' }}>
                                      {/* {showDetails?.[boardIndex]?.classDetailsToShow?.[classIndex]?.sectionsDetailsToShow?.[sectionIndex]?.toShowSections ? */}
                                      <div
                                        draggable
                                        onDragStart={dragStart}
                                        id={sections.section_id}
                                      >
                                        <h4>{sections.section_name}</h4>
                                      </div>
                                      {/* : <div>[section]</div>} */}
                                      {/* <div style={{ marginLeft: '20px' }}><ArrowDropDownIcon /></div> */}
                                    </div>
                                  ))}
                                </div>
                                <div className='subject-container'>
                                  <h4>Subject</h4>
                                  {classes.subject_details.map((subject, subjectIndex) => (
                                    <div style={{ display: 'flex' }}>
                                      <div
                                        draggable
                                        onDragStart={dragStart}
                                        id={subject.subject_id}
                                      >
                                        <h4>{subject.subject_name}</h4>
                                      </div>
                                    </div>
                                  )
                                  )}
                                </div>
                              </div>
                              : <div className='class-child'
                              >[{classes.class_name}]</div>}
                            <div><ArrowDropDownIcon /></div>
                          </div>
                        ))}
                      </div>
                    </div>
                    : <div className="board-child"
                      draggable
                      onDragStart={dragStart}
                      id={board.board_id}>[{board.board_name}]</div>}
                  <div draggable onDragStart={dragStart}><ArrowDropDownIcon /></div>
                </div>
              </div>
            ))}
          </div>
          <RightSection />
        </div>
      </div>
    </Router>
  );
}

export default App;
