import { serializeProductItem, serializeProducts } from "./serialize";

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
    }
}

export default Api;