import { DECREASE_QUANTITY, DELETE_CART, INCREASE_QUANTITY, SET_CART, SET_QUANTITY } from "./cartActionConst";

const initialState = []

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CART:
            var data = action.payload.data
            data.qty = action.payload.qty
            return [ ...state,
                data
            ]
        case DELETE_CART:
            return [ ...state.filter((el) => {return el.id !== action.payload})]
        case SET_QUANTITY:
            state.find(x => x.id === action.payload.data.id).qty = action.payload.qty 
            return  [...state, ]
        default: 
            return state
    }

}