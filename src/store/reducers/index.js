import {combineReducers} from 'redux'
import ProductReducer from './productSectionReducer'

const indexReducer = combineReducers({
    product: ProductReducer
});

export default indexReducer
