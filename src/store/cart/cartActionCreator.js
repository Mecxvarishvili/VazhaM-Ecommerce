import { DECREASE_QUANTITY, DELETE_CART, INCREASE_QUANTITY, SET_CART } from "./cartActionConst"

export const setCart = (cart) => {
    return {
        type: SET_CART,
        payload: cart
    }
}

export const deleteCart = (cart) => {
    return {
        type: DELETE_CART,
        payload: cart.id,
    }
}
export const increaseQuantity = (qty) => {
    return {
        type: INCREASE_QUANTITY,
        payload: qty
    }
}

export const decreaseQuantity = (qty) => {
    return {
        type: DECREASE_QUANTITY,
        payload: qty
    }
}