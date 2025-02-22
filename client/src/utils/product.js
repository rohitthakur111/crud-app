import Api from "../api";

export const addProduct = async (formData) => {
    try {
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

export const getProducts = async (query) => {
    try {
        const response = await Api.get('/products?' + query)
        return response.data
    } catch (err) {
        throw new Error(err)
    }
}

export const getProduct = async (id) => {
    try {
        const response = await Api.get('/products/' + id)
        return response.data
    } catch (err) {
        throw new Error(err)
    }
}

export const upDateProduct = async (id, formData) => {
    try {
        const response = await Api.put('/products/' + id, formData, {
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

export const deleteProduct = async (id) => {
    try {
        const response = await Api.delete('/products/' + id)
        return response.data
    } catch (err) {
        throw new Error(err)
    }
}


export const debounce = (callback, delay) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
};
