import { useReducer, useState } from "react";
import constate from "constate";
import { fetchMethod } from "../utils";

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
        default:
            return state
    }
}

function useDemoCounter({initialData = {}}) {
    const defaultState = {
        count: 0,
        message: '',
        dataApi: []
    }

    const init = (initialData) => ({
        ...defaultState,
        ...initialData,
    })
    const [isLoading, setIsLoading ] = useState(true)
    const [state, dispatch] = useReducer(reducer, initialData, init)

    const { count, message, dataApi } = state

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

    return { isLoading, count, message, increment, reset, greetings, dataApi }
}

const [DemoCounterProvider, useDemoCounterContext] = constate(useDemoCounter);

export { DemoCounterProvider, useDemoCounterContext }