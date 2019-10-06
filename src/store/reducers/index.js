import {combineReducers} from 'redux'
import CategoriesReducer from './categoriesReducer'

const indexReducer = combineReducers({
    categoriesStore: CategoriesReducer
});

export default indexReducer
