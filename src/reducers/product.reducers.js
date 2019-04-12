import * as types from '../constants/actionTypes';
import { connect } from 'http2';
import { all } from 'q';
import { Agent } from 'https';

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
