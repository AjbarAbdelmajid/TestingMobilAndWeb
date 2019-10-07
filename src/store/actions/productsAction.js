export const GET_PRODUCTS_BEGIN = 'GET_PRODUCTS_BEGIN';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';


// to fire a loading view and reset the store
export const ProductsDataBegin = () =>({
    type: GET_PRODUCTS_BEGIN,
});

// to store the grabbed data from api
export const ProductsDataSuccess = data =>({
    type: GET_PRODUCTS_SUCCESS,
    productsPayload: data
});

// in case if an error happened
export const ProductsDataFail = error =>({
    type: GET_PRODUCTS_FAILURE,
    errorPayload: error
});

