import { DECREASE_QUANTITY, DELETE_CART, INCREASE_QUANTITY, SET_CART, SET_COOKIECART, SET_QUANTITY } from "./cartActionConst"

export const  setCartCookie = (data) => {
    return {
        type: SET_COOKIECART,
        payload: data
    }
}

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

export const setQuantity = (data, qty) => {
    return {
        type: SET_QUANTITY,
        payload: {data, qty}
    }
}