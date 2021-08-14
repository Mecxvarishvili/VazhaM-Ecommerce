import { SET_USER, SET_TOKEN } from "./userActions"

const initialState = {
    user: {},
    isLogginIn: false,
    isLoggedIn: false,
    token: '', 
}

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case SET_USER: 
            return {
                ...state,
                user: action.payload
            }
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        default:
            return state
    }
}