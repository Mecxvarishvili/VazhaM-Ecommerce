import { DELETE_CART, SET_CART } from "./cartActionConst";

const initialState = { 
    isAdded: {}, 
    product: [],
    amount: [],
}

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CART:
            var index =  state.product.map(x => {
                if (x.id === action.payload.id)
                return x.id
            }).indexOf(action.payload.id)
            
            if(index < 0 ) {
                state.product.push(action.payload)
            }

            return { 
                ...state,
            }
        case DELETE_CART:
            var index =  state.product.map(x => {
                if (x.id === action.payload.id)
                return x.id
            }).indexOf(action.payload.id)
            
            if(index >= 0 ) {
                state.product.splice(index, 1)
            }

            return {
                ...state,
                isAdded: action.payload.id
            }
        default: 
            return state
    }

}