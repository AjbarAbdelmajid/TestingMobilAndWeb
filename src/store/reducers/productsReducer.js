
import {GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    IS_DATA_ENDED,
    GET_PRODUCTS_BEGIN} from '../actions/productsAction.js'

const initialState = {
    products:[],
    isLoading: false,
    error: null,
    currentPage: 0,
    isDataEnded: true
};

const ProductsReducer = (state = initialState, action)=>{
    switch (action.type) {
        
        case GET_PRODUCTS_BEGIN:
            return {
                ...state,
                isLoading: true,
                products: [],
            }
        case IS_DATA_ENDED:
            return {
                ...state,
                currentPage: action.currentPage,
                isDataEnded: true
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: state.products.concat(action.productsPayload),
                error: null,  
                currentPage: action.currentPage,
                isDataEnded: false
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