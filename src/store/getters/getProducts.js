import axios from 'axios'

import config from './config'
import {
    ProductsDataBegin,
    ProductsDataSuccess,
    ProductsDataFail
} from '../actions/productsAction.js'


// get the products by category
export const getProductsByType = (Id, type)=>{
    let url = ``
    return dispatch => {
        dispatch(ProductsDataBegin())
        //get data from SaoasApi

        // send a url depened on witch type is asked for
        if (type === "category"){
            url = `${config.baseUrl}/productbyCategorie/${Id}`
        }
        else if(type === "culture"){
            url = `${config.baseUrl}/productbyCulture/${Id}`
        }
        else {
            console.log('the error is in the getProduct if statement')
        }
        return axios.get(url)

            // if the connection with the api server is okay
            .then(response =>{
                if (response.status === 200){
                    dispatch(ProductsDataSuccess(response.data))
                } else{
                    throw Error(response.status)
                }

            // if there is an error with establishing the connection with the server
            }).catch(err => {
                dispatch(ProductsDataFail(err.message));
                console.log("what you did wrong is : ",err.message);
            })
    }
};