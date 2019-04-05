import Axios from 'axios';
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const LOAD_PRODUCT = 'LOAD_PRODUCT';


export const loadProductsApi = () => {
    return dispatch => {
        return Axios.get('http://localhost:3030/api/products').then(res => {
            dispatch(loadProducts(res.data))
        })
    }
}

export const loadProducts = (products) => {
    return {
        type: LOAD_PRODUCTS,
        payload: products
    }
}