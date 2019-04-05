import * as types from '../constants/actionTypes';

const initialState = {
    products: [],
    product: {}
};

const productReducer = (state = initialState, action)  => {
    switch(action.type) {
        case types.LOAD_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            }
        }
        case types.LOAD_PRODUCT: {
            return {
                ...state,
                product: action.payload
            }
        }
    }
    return state;
}

export default productReducer;