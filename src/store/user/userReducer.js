import { SET_USER, SET_TOKEN, GET_LOGGEDIN, GET_LOADING } from "./userActionsConst"

const initialState = {
    user: {},
    token: {}, 
    isLoggedIn:  localStorage.getItem("Token"),
    isLoading: false,
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
        case GET_LOGGEDIN:
            return {
                ...state,
                isLoggedIn: action.payload
            }
        case GET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}