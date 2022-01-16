import React from "react";
import "./App.css";
import { useEffect, useState } from 'react';
import { ClipLoader } from "react-spinners";
import axios from "axios";
import BackToTop from "./components/BackTop";
import EmptyWrapper from "./components/Empty";
import { BrowserRouter, Link } from "react-router-dom";
import NotFound from "./components/NotFound";
import GeneralInfo from "./components/GeneralInfo";


function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [counter, setcounter] = React.useState(0);
  const [apiData, setApiData] = useState([])
  useEffect(() => {
    fetchBoardData()
  }, [])

  const fetchBoardData = async () => {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
      setApiData(data)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) return <ClipLoader loading={isLoading} size={150} data-testid="spinner-container" />

  return (
    <BrowserRouter>
      <div className={`App${isLoading}`} data-testid="data-container" >
        {/* {apiData.map((todo, index) => <div data-testid={`todo-container-${index}`} key={todo.id}>
        <div>
          title: {todo.title}
        </div>
        <div>userId: {todo.userId}</div>
      </div>)} */}
        <div style={{ height: '23px' }}>
          <h1>This is counter app</h1>
          <div id="counter-value">{counter}</div>
          <button id="increment-btn" onClick={() => setcounter(counter + 1)}>
            Increment
          </button>
          <button id="decrement-btn">
            <Link to="/one" >
              Decrement
            </Link>
          </button>
          <BackToTop visibilityHeight={400} duration={400} children={<h3>Hello</h3>} />
          <EmptyWrapper description={<span>
            Customize <a href="#API">Description</a>
          </span>} image='simple' />
          <NotFound />
          <GeneralInfo />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
