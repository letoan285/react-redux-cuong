import * as types from '../constants/actionTypes';

const initialState = {
    products: []
};

const rootReducer = (state = initialState, action)  => {
    switch(action.type) {
        case types.LOAD_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            }
        }
    }
    return state;
}

export default rootReducer;