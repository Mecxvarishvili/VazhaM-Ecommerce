import user from './user/userReducer';
import cart from './cart/cartReducer';
import products from './products/productsReducer';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    user,
    products,
    cart
})
const  rootReducer = (state, action) => {
    return allReducer(state, action)
}

export default rootReducer