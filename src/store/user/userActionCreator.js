import { SET_ISLOGGEDIN, SET_TOKEN, SET_USER } from "./userActionsConst"

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user,
    }
}

export const setToken = (token) => {
    return {
        type: SET_TOKEN,
        payload: token,
    }
}

export const setLoggedIn = (isLoggedIn) => {
    return {
        type: SET_ISLOGGEDIN,
        payload: isLoggedIn,
    }
}