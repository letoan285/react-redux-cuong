import Axios from 'axios';
import {loadProducts, loadProduct} from '../actions/product.actions';
import { environment } from '../config/index';

export const loadProductsApi = () => {
    return dispatch => {
        return Axios.get(`${environment.API}/products`).then(res => {
            dispatch(loadProducts(res.data))
        })
    }
}


export const loadProductApi = (id) => {
    return dispatch => {
        return Axios.get(`${environment.API}/products/${id}`).then(res => {
            dispatch(loadProduct(res.data))
        })
    }
}
