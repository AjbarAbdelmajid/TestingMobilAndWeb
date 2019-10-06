import {combineReducers} from 'redux'
import CategoriesReducer from './categoriesReducer'
import CulturesReducer from './culturesReducer'

const indexReducer = combineReducers({
    categoriesStore: CategoriesReducer,
    culturesStore: CulturesReducer
});

export default indexReducer
