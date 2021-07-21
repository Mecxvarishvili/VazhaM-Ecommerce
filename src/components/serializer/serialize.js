export function serializeProducts(data){
    return data.map(el => {
        return {
            title: el.title,
            price: el.price,
            img: el.image,
            id: el.id,
            describe: el.describtion
        }
    })
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