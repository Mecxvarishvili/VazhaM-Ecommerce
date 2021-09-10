import { serializeProductItem, serializeProducts, serializeAddProduct, serializeProductLimit, serializeSignIn, serializeSignUp, serializeProfileUpdate } from "./serialize";
import { serialize } from "object-to-formdata";

const Api = {
    baseApi: (url, method= "GET", params, isFile) => {
        let headers = {};

        if (!isFile) {
            headers= {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem('Token')}`
            };
        } else {
            headers = {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("Token")}`,
            }
        }
        return fetch('http://159.65.126.180/api/'+ url, {
            method: method,
            headers,
            body: isFile ? serialize(params) : JSON.stringify(params)
        })
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                return res.json()
            }
        })
    },
    getProducts: (page)=> {
        return Api.baseApi(`products?page=${page}`)
            .then(json => {{return serializeProducts(json)}})
    },

    getProductItem: (id) => {
        return Api.baseApi(`products/${id}`)
        .then(json => {{return serializeProductItem(json)}})
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

    getSignIn: (values) => {
        return Api.baseApi('auth/login', "POST", serializeSignIn(values))
    },

    getSignUp: (values) => {
        return Api.baseApi('register', "POST", (serializeSignUp(values)))
    },

    getToken: () => {
        return Api.baseApi('auth/me', "POST", )
    },

    updateUser: (id, values) => {
        return Api.baseApi(`users/${id}/update`, "POST", values, true)
        /* return fetch (`http://159.65.126.180/api/users/${id}/update`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("Token")}`
            },
            body:JSON.stringify(serializeProfileUpdate(values))
        }) */
    }
}

export default Api;