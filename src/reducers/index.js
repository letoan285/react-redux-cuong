import * as types from '../constants/actionTypes';

const initialState = [
    {id: 1, name: 'product 1', price: 3300, image: 'noimage.png', description: 'this is product 1', status: 1},
    {id: 2, name: 'product 2', price: 4300, image: 'noimage.png', description: 'this is product 2', status: 1},
    {id: 3, name: 'product 3', price: 5300, image: 'noimage.png', description: 'this is product 3', status: 1}
];

const productReducer = (state = initialState, action)  => {
    switch(action.type) {
        case types.LOAD_PRODUCTS: {
            return {
                ...state
            }
        }
    }
    return state;
}

export default productReducer;