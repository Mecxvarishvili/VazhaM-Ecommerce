import { DECREASE_QUANTITY, DELETE_CART, INCREASE_QUANTITY, SET_CART, SET_QUANTITY } from "./cartActionConst"

export const setCart = (data, qty) => {
    return {
        type: SET_CART,
        payload: {data, qty}
    }
}

export const deleteCart = (cart) => {
    return {
        type: DELETE_CART,
        payload: cart.id,
    }
}
export const increaseQuantity = (data, qty) => {
    return {
        type: INCREASE_QUANTITY,
        payload: {data, qty,}
    }
}

export const decreaseQuantity = (qty) => {
    return {
        type: DECREASE_QUANTITY,
        payload: qty
    }
}

export const setQuantity = (data, qty) => {
    return {
        type: SET_QUANTITY,
        payload: {data, qty}
    }
}