import * as types from '../constants/actionTypes';

export const loadProducts = (products) => {
    return {
        type: types.LOAD_PRODUCTS,
        payload: products
    }
}


export const loadProduct = (product) => {
    return {
        type: types.LOAD_PRODUCT,
        payload: product
    }
}