import axios from 'axios'
import config from './config'
//import {} from '../store/action/categoryAction'

// get the categories data
export const getCategories = ()=>{
    console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
    return dispatch => {
        console.log("ttttttttttttttttttttttttttttttttttttttttttttt");
        console.log(config.baseUrl);
        //dispatch(CategoryDataBegging());

        //get data from api
        return axios.get(`${config.baseUrl}/productCategories/`)
            .then(data=>{
                console.log(data);
            }).catch(err => {throw Error(err)
            })
    }
};