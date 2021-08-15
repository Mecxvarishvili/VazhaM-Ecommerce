import { GET_LOADING, GET_LOGGEDIN, SET_TOKEN, SET_USER } from "./userActionsConst"

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
        type: GET_LOGGEDIN,
        payload: isLoggedIn,
    }
}

export const setIsLoading = (isLoading) => {
    return {
        type: GET_LOADING,
        payload: isLoading,
    }
}