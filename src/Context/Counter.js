import { useEffect, useState } from "react";
import constate from "constate";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { updateTodo } from "../redux/actions/todoAction";
import { useRoleContext } from "./TempContext";

function useCounter() {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true)
    const [apiData, setApiData] = useState([])
    // const dispatch = useDispatch()
    const increment = () => setCount(prevCount => prevCount + 1);
    const { role } = useRoleContext()
    const permission = role.includes('read')
    // const fetchBoardData = async () => {
    //     try {
    //         const { data = [] } = await axios.get('https://jsonplaceholder.typicode.com/todos')
    //         dispatch(updateTodo(data))
    //         setApiData(data)
    //     } catch (err) {
    //         console.log(err)
    //     } finally {
    //         setIsLoading(false)
    //     }
    // }

    const greetings = (name) => (`Hello ${name}`);

    useEffect(() => {
        // fetchBoardData()
    }, [])

    return { count, increment, isLoading, apiData, greetings, permission }
}

const [CounterProvider, useCounterContext] = constate(useCounter);
export { CounterProvider, useCounterContext }