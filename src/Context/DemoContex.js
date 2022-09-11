import { useReducer, useState } from "react";
import constate from "constate";
import { fetchMethod } from "../utils";
import { useCounterContext } from "./Counter";

const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_COUNT":
            return {
                ...state,
                count: state.count + 1
            }
        case 'UPDATE_MESSAGE':
            return {
                ...state,
                message: action.payload
            }
        case "RESET":
            return {
                count: 0,
                message: '',
            }
        case 'SET_API_DATA': 
        return {
            ...state,
            dataApi: action.payload
        }
        case 'UPDATE_EXPANDED_ROW':
            return {
                ...state,
                expandedRowData: action.payload
            }
        default:
            return state
    }
}

function useDemoCounter({initialData = {}}) {
    const { count: countContext } = useCounterContext()
    const defaultState = {
        count: 0,
        message: '',
        dataApi: [],
        expandedRowData: {},
    }

    const init = (initialData) => ({
        ...defaultState,
        ...initialData,
    })
    const [isLoading, setIsLoading ] = useState(true)
    const [state, dispatch] = useReducer(reducer, initialData, init)

    const { count, message, dataApi, expandedRowData } = state
    const isRoleAvailable = true || false
    const increment = async () => {
        try {
            const data = await fetchMethod(
                `https://api.stackexchange.com/2.2/search/advanced?page=1&order=desc&sort=activity&site=stackoverflow`
            );
            dispatch({type: 'SET_API_DATA', payload: [...dataApi, ...data.items]})
        } catch (err) {
            console.log(err)
        } finally {

        }
        setIsLoading(false)
        dispatch({ type: 'UPDATE_COUNT'})
        dispatch({ type: 'UPDATE_MESSAGE', payload: 'HI ALEX' })
    }

    const reset = () => dispatch({type: 'RESET'})

    const greetings = (name) => (`Hello ${name}`);
    const updateCurrentExpandedRow = (data) => dispatch({ type: 'UPDATE_EXPANDED_ROW', payload: data})
    const newData = countContext + 5;
    return { isLoading, count, message, increment, reset, greetings, dataApi, isRoleAvailable, newData, updateCurrentExpandedRow, expandedRowData }
}

const [DemoCounterProvider, useDemoCounterContext] = constate(useDemoCounter);

export { DemoCounterProvider, useDemoCounterContext }