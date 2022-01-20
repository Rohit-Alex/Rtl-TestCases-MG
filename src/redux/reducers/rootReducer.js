import todoReducer from './todoReducer'
import { combineReducers } from 'redux'
import greetingReducer from './greetingsReducer'

const rootReducer = combineReducers({
    todos: todoReducer,
    greetings: greetingReducer
})

export default rootReducer