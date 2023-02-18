const BaseUrl = 'https://fakestoreapi.com'

//Get all the products [array 20 items]

export const get_products = async () => {
    const res = await fetch(`${BaseUrl}/products`)
    let data = await res.json()
    return data
}

//Get porductos by ID

export const get_product = async (id) => {
    const res = await fetch(`${BaseUrl}/products/${id}`)
    let data = await res.json()

    return data
}

//Get all products categories

export const get_categories = async () => {
    const res = await fetch(`${BaseUrl}/products/categories`)
    let data = await res.json()
    return data
}

//Get a specific products on category

export const get_category = async (category) => {
    const res = await fetch(`${BaseUrl}/products/category/${category}`)
    let data = await res.json()
    return data
}
