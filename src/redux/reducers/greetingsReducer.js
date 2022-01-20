const initialState = {
    message: ''
}

const greetingReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_MESSAGE' : return {
            message: action.payload
        }
        default: return state
    }
}

export default greetingReducer