import { useContext } from "react";
import { AuthContext } from "../store/UserContextProvider";
import { serializeProductItem, serializeProducts, serializeAddProduct, serializeProductLimit, serializeSignIn, serializeSignUp } from "./serialize";



const Api = {
    getProducts: (page)=> {
        return fetch(`http://159.65.126.180/api/products?page=${page}`)
            .then(res => res.json())
            .then(json => {{return serializeProducts(json)}})
    },

    getProductItem: (id) => {
        return fetch(`http://159.65.126.180/api/products/${id}`)
        .then(res => res.json())
        .then(el => {{return serializeProductItem(el)}})
    },
    getProductLimit: (limit) => {
        return fetch(`https://fakestoreapi.com/products?limit=${limit}`)
                .then(res=>res.json())
                .then(json=> {{return serializeProductLimit(json)}})
    },
    addProduct: (formik) => {
        return fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(serializeAddProduct(formik))
        })
            .then(res=>res.json())
    },

    getSignIn: (values, setToken) => {
        return fetch('http://159.65.126.180/api/auth/login', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body:JSON.stringify(serializeSignIn(values))
        })
            .then(res => res.json())
            .then(json => setToken(json))
            
    },

    getSignUp: (values) => {
        return fetch('http://159.65.126.180/api/register', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body:JSON.stringify(serializeSignUp(values))
        })
    },

    getToken: (token, setUserData) => {
        return fetch ('http://159.65.126.180/api/auth/me', {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token.token.access_token}`
            },
        })
            .then(res => res.json())
            .then(json => setUserData(json))
    }
}

export default Api;