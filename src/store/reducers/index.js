import {combineReducers} from 'redux'
import CategoriesReducer from './categoriesReducer'
import CulturesReducer from './culturesReducer'
import ProductsReducer from './productsReducer'
import NewsReducer from './newsReducer'

const indexReducer = combineReducers({
    categoriesStore: CategoriesReducer,
    culturesStore: CulturesReducer,
    productsStore: ProductsReducer,
    newsStore: NewsReducer,
});

export default indexReducer
