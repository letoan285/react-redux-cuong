import { combineReducers } from 'redux';

import productReducer from './product.reducers';
import categoryReducer from './category.reducers';

const rootReducer = combineReducers({
    productReducer,
    categoryReducer
});

export default rootReducer;