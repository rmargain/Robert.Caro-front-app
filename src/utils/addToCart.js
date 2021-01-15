export const addToCart = (product, products) => {
    products = products.push(product)
    return products
}

export const createCart = () =>{
    return localStorage.setItem('cart')
}