import axios from 'axios'

import config from './config'

import {NewsDataSuccess,
    isDataEnded,
    NewsDataBegin} from '../actions/newsAction'

export const getNews = (page) => {
    let maxResult = 10;
    return dispatch => {

        //reset the store in the beginning
        if(page === 0)
        dispatch(NewsDataBegin())

        //get data from SaoasApi
        return axios.get(`${config.baseUrl}/GetActualites/pages/${page}/maxResult/${maxResult}`)

            // if the connection with the api server is okay
            .then(response =>{
                if (response.status === 200){
                    dispatch(NewsDataSuccess(response.data, (page+1)))
                    // if it's the last chunk of data
                    if(response.data.length <maxResult){
                        dispatch(isDataEnded())
                    }
                    console.log("data is loaded. loaded length : ", response.data.length)
                } else{
                    throw Error(response.status)
                }

            // if there is an error with establishing the connection with the server
            }).catch(err => {
                
                console.log("what you did wrong is : ",err.message);
            })
    }
}