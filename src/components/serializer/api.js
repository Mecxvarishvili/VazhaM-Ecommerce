import { serializeProductItem, serializeProducts, serializeAddProduct, serializeProductLimit } from "./serialize";

const Api = {
    getProducts: ()=> {
        return fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {{return serializeProducts(json)}})
    },
    getProductItem: (id) => {
        return fetch(`https://fakestoreapi.com/products/${id}`)
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
}

export default Api;