import axios from 'axios'

import config from './config'
import {
        CategoriesDataSuccess,
        CategoriesDataFail
} from '../actions/categoriesAction.js'


// get the categories data
export const getCategories = ()=>{
    return dispatch => {

        //get data from SaoasApi
        return axios.get(`${config.baseUrl}/productCategories`)

            // if the connection with the api server is okay
            .then(response =>{
                if (response.status === 200){
                    dispatch(CategoriesDataSuccess(response.data))
                } else{
                    throw Error(response.status)
                }

            // if there is an error with establishing the connection with the server
            }).catch(err => {
                dispatch(CategoriesDataFail(err.message));
                console.log("what you did wrong is : ",err.message);
            })
    }
};