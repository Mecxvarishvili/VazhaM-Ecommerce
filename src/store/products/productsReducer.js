import { SET_ISLOADING, SET_PRODUCT, SET_SINGLEPAGE } from "./productActionConst"

const initialState = {
    products: {data:[], page:[]},
    singlePage: {data:[]},
    isLoading: true
}

export default function productReducer(state = initialState, action) {
    switch(action.type) {
        case SET_PRODUCT:
            return {
                ...state,
                products:  action.payload
            }
        case SET_SINGLEPAGE:
            return {
                ...state,
                singlePage: action.payload
            }
        case SET_ISLOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}