import { DECREASE_QUANTITY, DELETE_CART, INCREASE_QUANTITY, SET_CART, SET_COOKIECART, SET_QUANTITY } from "./cartActionConst";
import { getCartCookie } from "./cartSelector";

const initialState = {
    products:[]
}

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case SET_COOKIECART:
            return {
                products: [action.payload]
            }
        case SET_CART:
            var data = action.payload.data
            data.qty = action.payload.qty

            return { ...state,
                products:[ ...state.products, data]
            }
        case DELETE_CART:
            var data = state.products.filter((el) => {return el.id !== action.payload})

            return { ...state,
                products: [ ...data]
            }
        case SET_QUANTITY:
            var data = [...state.products]
            data.find(x => x.id === action.payload.data.id).qty = action.payload.qty 

            return  {
                ...state,
                products: [...data]
            }
        default: 
            return state
    }

}