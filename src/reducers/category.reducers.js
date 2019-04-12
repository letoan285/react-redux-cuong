import * as types from '../constants/actionTypes';

const initialState = {
    categories: [],
    category: {}
}
const categoryReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LOAD_CATEGORIES: {
            return {
                ...state,
                categories: action.payload
            }
        }
    }
    
    return state;
}

export default categoryReducer;