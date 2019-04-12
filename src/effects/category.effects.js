import Axios from 'axios';
import { environment } from '../config/index';
import { loadCategories } from '../actions/category.actions';


export const loadCategoriesApi = () => {
    return dispatch => {
        return Axios.get(`${environment.API}/categories`).then(res => {
            dispatch(loadCategories(res.data))
        })
    }
}
