import { serializeProductItem, serializeProducts, serializeAddProduct, serializeProductLimit, serializeSignIn, serializeSignUp, serializeProfileUpdate } from "./serialize";



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

    getSignIn: (values) => {
        return fetch('http://159.65.126.180/api/auth/login', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body:JSON.stringify(serializeSignIn(values))
        })
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

    getToken: () => {
        return fetch ('http://159.65.126.180/api/auth/me', {
            method: "POST",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("Token")}`
            },
        })
            .then(res => res.json())
    },

    updateUser: (values) => {
        return fetch ('http://159.65.126.180/api/users/1/update', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("Token")}`
            },
            body:JSON.stringify(serializeProfileUpdate(values))
        })
    }
}

export default Api;