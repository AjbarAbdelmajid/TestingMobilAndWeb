import {combineReducers} from 'redux'
import CategoriesReducer from './categoriesReducer'
import CulturesReducer from './culturesReducer'
import ProductsReducer from './productsReducer'

const indexReducer = combineReducers({
    categoriesStore: CategoriesReducer,
    culturesStore: CulturesReducer,
    productsStore: ProductsReducer
});

export default indexReducer
