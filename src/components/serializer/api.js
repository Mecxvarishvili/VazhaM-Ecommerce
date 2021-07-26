import { serializeProductItem, serializeProducts, serializeAddProduct, serializeProductLimit, serializeSignIn, serializeSignUp } from "./serialize";

const Api = {
    getProducts: ()=> {
        return fetch('http://159.65.126.180/api/products')
            .then(res => res.json())
            .then(json => {{return serializeProducts(json)}})
    },
    getProductItem: (id) => {
        return fetch(`http://159.65.126.180/api/products/${id}`)
        .then(res => res.json())
        .then(el => {{return serializeProductItem(el)}})
    },
    getProductLimit: (limit) => {
        return fetch(`http://159.65.126.180/api/products?limit=${limit}`)
                .then(res=>res.json())
                .then(json=> {{return serializeProductLimit(json)}})
    },
    addProduct: (formik) => {
        return fetch('http://159.65.126.180/api/products',{
            method:"POST",
            body:JSON.stringify(serializeAddProduct(formik))
        })
            .then(res=>res.json())
    },

    getSignIn: (formik) => {
        return fetch('http://159.65.126.180/api/auth/login', {
            method: "POST",
            body:JSON.stringify(serializeSignIn(formik))
        })
    },

    getSignUp: (formik) => {
        return fetch('http://159.65.126.180/api/register', {
            method: "POST",
            body:JSON.stringify(serializeSignUp(formik))
        })
    }
}

export default Api;