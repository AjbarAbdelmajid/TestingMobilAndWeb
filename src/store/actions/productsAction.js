export const GET_PRODUCTS_BEGIN = 'GET_PRODUCTS_BEGIN';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';
export const IS_DATA_ENDED = 'IS_DATA_ENDED';
export const GET_PRODUCTDETAILS_SUCCESS = 'GET_PRODUCTDETAILS_SUCCESS';
export const GET_PRODUCTDETAILS_FAILURE = 'GET_PRODUCTDETAILS_FAILURE';


// to fire a loading view and reset the store
export const ProductsDataBegin = () =>({
    type: GET_PRODUCTS_BEGIN,
});

// to store the grabbed data from api
export const ProductsDataSuccess = (data, currentPage) =>({
    type: GET_PRODUCTS_SUCCESS,
    productsPayload: data,
    currentPage: currentPage
});
// to store the grabbed data from api
export const isDataEnded = (currentPage) =>({
    type: IS_DATA_ENDED,
    currentPage: currentPage,
    isDataEnded: true
});

// in case if an error happened
export const ProductsDataFail = error =>({
    type: GET_PRODUCTS_FAILURE,
    errorPayload: error
});

//_____________product details_______________

export const ProductDetailsSuccess = data =>({
    type: GET_PRODUCTDETAILS_SUCCESS,
    productDetailPayload: data
});

export const ProductDetailsFail = error =>({
    type: GET_PRODUCTDETAILS_FAILURE,
    errorPayload: error
});

