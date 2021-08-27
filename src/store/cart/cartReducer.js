import { DECREASE_QUANTITY, DELETE_CART, INCREASE_QUANTITY, SET_CART } from "./cartActionConst";

const initialState = []

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CART:
            return [ ...state,{
                ...action.payload, qty:1}
            ]
        case DELETE_CART:
            return state.filter((el) => {return el.id !== action.payload})
        case INCREASE_QUANTITY:
            return  [...state,{
                ...action.payload, qty: +1}
            ]
        case DECREASE_QUANTITY:
            return [ ...state,{
                ...action.payload, qty: -1}
            ]
        default: 
            return state
    }

}