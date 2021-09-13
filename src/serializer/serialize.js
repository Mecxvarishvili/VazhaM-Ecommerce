export function serializeProducts(data){
    return {
        page: data.page,
        data: data.data.map(el => {
            return {
                id: el.id,
                title: el.title,
                price: el.price,
                img: el.image,
                describe: el.description,
                category: el.category,
                qty: 1,
            }
        })

    }
}

export function serializeProductItem(el){
    return {
        id: el.id,
        title: el.title,
        price: el.price,
        img: el.image,
        describe: el.description,
        category: el.category,
        qty: 1,
    }
}

export function serializeAddProduct(formik){
    return {
        data: {
            title: formik.values.title,
            price: formik.values.price,
            description: formik.values.description,
            image: formik.values.image,
            category: formik.values.category
        }
    }
}

export function serializeProductLimit(data){
    return {
        page: data.page,
        data: data.map(el => {
            return {
                id: el.id,
                title: el.title,
                price: el.price,
                describe: el.description
            }
        })

    }
}

export function serializeSignIn(values) {
    return {
        email: values.email,
        password: values.password
    }
}

export function serializeSignUp(values) {
    return {
        name: values.firstName,
        email: values.email,
        password: values.password,
        password_confirmation: values.repassword
    }
}

export function serializeProfileUpdate(values) {
    return {
        name: values.name,
    }
}
export function serializeCart(data) {
    return data.map(el => {
            return {
                id: el.id,
                title: el.title,
                price: el.price,
                img: el.img,
                category: el.category,
                qty: el.qty
            }
        })
}

export function serializeCartAmount(data) {
    return data.map(el => {
        return el.price * el.qty
    })
}