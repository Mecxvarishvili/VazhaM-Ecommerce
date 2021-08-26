import { SET_ISLOADING, SET_PRODUCT, SET_SINGLEPAGE } from "./productActionConst"

export const setProduct =  (data) => {
    return {
        type: SET_PRODUCT,
        payload: data
    }
}

export const setSingePage = (data) => {
    return {
        type: SET_SINGLEPAGE,
        payload: data
    }
}

export const setIsLoading = (loading) => {
    return {
        type: SET_ISLOADING,
        payload: loading
    }
}