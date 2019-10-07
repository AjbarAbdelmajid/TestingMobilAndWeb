
import {GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_BEGIN} from '../actions/productsAction.js'

const initialState = {
    products:[],
    isLoading: false,
    error: null,
};

const ProductsReducer = (state = initialState, action)=>{
    switch (action.type) {
        
        case GET_PRODUCTS_BEGIN:
            return {
                ...state,
                isLoading: true,
                products: [],
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: action.productsPayload,
                error: null,  
            }
        case GET_PRODUCTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                products: [],
                error: action.errorPayload,         
            }
        default:
            return state;
    }
};
export default ProductsReducer