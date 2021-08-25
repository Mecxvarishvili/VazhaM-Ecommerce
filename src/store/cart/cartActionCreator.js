import { DELETE_CART, SET_CART } from "./cartActionConst"

export const setCart = (cart) => {
    return {
        type: SET_CART,
        payload: cart
    }
}

export const deleteCart = (cart) => {
    return {
        type: DELETE_CART,
        payload: cart,
    }
}