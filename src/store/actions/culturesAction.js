export const GET_CULTURES_SUCCESS = 'GET_CULTURES_SUCCESS';
export const GET_CULTURES_FAILURE = 'GET_CULTURES_FAILURE';


// to store the grabbed data from api
export const CulturesDataSuccess = announces =>({
    type: GET_CULTURES_SUCCESS,
    culturesPayload: announces
});

// in case if an error happened
export const CulturesDataFail = error =>({
    type: GET_CULTURES_FAILURE,
    errorPayload: error
});

