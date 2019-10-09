export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE';


// to store the grabbed data from api
export const CategoriesDataSuccess = data =>({
    type: GET_CATEGORIES_SUCCESS,
    categoriesPayload: data
});

// in case if an error happened
export const CategoriesDataFail = error =>({
    type: GET_CATEGORIES_FAILURE,
    errorPayload: error
});

