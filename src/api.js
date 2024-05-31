
export const getCategories = async () => {
    const res = await fetch('https://fakestoreapi.com/products/categories')
    if(!res.ok) {
        throw {
            message: "Failed to fetch categories",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data
}