import { UPDATE_MESSAGE } from "../actionsConstant"

export const updateGreetingsMessage = (message) => {
    return {
        type: UPDATE_MESSAGE,
        payload: message
    }
}