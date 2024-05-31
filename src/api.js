
export const getCategories = async () => {
    const res = await fetch('https://fakestoreapi.com/products/categories')
    const data = await res.json()
    return data
}