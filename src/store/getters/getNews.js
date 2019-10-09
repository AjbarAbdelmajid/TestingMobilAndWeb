import axios from 'axios'

import config from './config'

import {NewsDataSuccess} from '../actions/newsAction'

export const getNews = () => {
    return dispatch => {

        //get data from SaoasApi
        return axios.get(`${config.baseUrl}/GetActualites`)

            // if the connection with the api server is okay
            .then(response =>{
                if (response.status === 200){
                    dispatch(NewsDataSuccess(response.data))
                } else{
                    throw Error(response.status)
                }

            // if there is an error with establishing the connection with the server
            }).catch(err => {
                
                console.log("what you did wrong is : ",err.message);
            })
    }
}