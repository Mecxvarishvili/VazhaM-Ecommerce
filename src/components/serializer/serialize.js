export function serializeProducts(data){
    return {
        page: data.page,
        data: data.data.map(el => {
            return {
                title: el.title,
                price: el.price,
                img: el.image,
                id: el.id,
                describe: el.describtion
            }
        })

    }
}

export function serializeProductItem(el){
    return {
        title: el.title,
        price: el.price,
        img: el.image,
        id: el.id,
        describe: el.description,
        category: el.category,
    }
}

export function serializeAddProduct(formik){
    return {
        data: {
            title: formik.values.title,
            price: formik.values.price,
            description: formik.values.description,
            image: formik.values.image,
            category: formik.values.category}
    }
}

export function serializeProductLimit(data){
    return {
        page: data.page,
        data: data.data.map(el => {
            return {
                id: el.id,
                title: el.title,
                price: el.price,
                describe: el.description
            }
        })

    }
}

export function serializeSignIn(formik) {
    return {
        email: formik.values.email,
        password: formik.values.password
    }
}

export function serializeSignUp(formik) {
    return {
        name: formik.values.firstName,
        email: formik.values.email,
        password: formik.values.password,
        password_confirmation: formik.values.password
    }
}