
import {GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILURE} from '../actions/categoriesAction.js'

const initialState = {
        categories:[],
        error: null,
};

const CategoriesReducer = (state = initialState, action)=>{
    switch (action.type) {
        
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.categoriesPayload,
                isLoading: false,
                error: null,  
            }
        case GET_CATEGORIES_FAILURE:
            return {
                ...state,
                categories: [],
                isLoading: false,
                error: action.errorPayload,         
            }
        default:
            return state;
    }
};
export default CategoriesReducer