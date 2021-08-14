import user from './user/userReducer';
import products from './products/productsReducer';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    user,
    products
})
const  rootReducer = (state, action) => {
    return allReducer(state, action)
}

export default rootReducer