import Api from "../api";

export const addProduct = async (formData) => {
    try {
        const token = localStorage.getItem('token')
        const response = await Api.post('/products', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }
        );
        return response.data
    } catch (err) {
        throw new Error(err)
    }
}

export const getProducts = async () => {
    try {
        const response = await Api.get('/products')
        return response.data
    } catch (err) {
        throw new Error(err)
    }
}