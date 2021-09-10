import { SET_USER, SET_TOKEN, SET_ISLOGGEDIN } from "./userActionsConst"

const initialState = {
    user: {},
    token: {}, 
    isLoggedIn: false,
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
        case SET_ISLOGGEDIN:
            return {
                ...state,
                isLoggedIn: action.payload
            }
        default:
            return state
    }
}