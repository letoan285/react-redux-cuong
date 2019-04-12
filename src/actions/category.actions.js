import * as types from '../constants/actionTypes';

export const loadCategories = (data) => {
    return {
        type: types.LOAD_CATEGORIES,
        payload: data
    }
}
