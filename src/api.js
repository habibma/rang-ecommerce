
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

export const loginAdmin = async creds => {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}