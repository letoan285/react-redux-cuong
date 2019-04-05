import * as types from '../constants/actionTypes';
import Axios from 'axios';


export const loadCategoriesApi = () => {
    return dispatch => {
        return Axios.get('http://localhost:3030/api/categories').then(res => {
            dispatch(loadCategories(res.data))
        })
    }
}

export const loadCategories = (data) => {
    return {
        type: types.LOAD_CATEGORIES,
        payload: data
    }
}
