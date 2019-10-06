import axios from 'axios'

import config from './config'
import {
        CulturesDataSuccess,
        CulturesDataFail
} from '../actions/culturesAction.js'


// get the cultures data
export const getCultures = ()=>{
    return dispatch => {

        //get data from SaoasApi
        return axios.get(`${config.baseUrl}/productCulture`)

            // if the connection with the api server is okay
            .then(response =>{
                if (response.status === 200){
                    dispatch(CulturesDataSuccess(response.data))
                } else{
                    throw Error(response.status)
                }

            // if there is an error with establishing the connection with the server
            }).catch(err => {
                dispatch(CulturesDataFail(err.message));
                console.log("what you did wrong is : ",err.message);
            })
    }
};