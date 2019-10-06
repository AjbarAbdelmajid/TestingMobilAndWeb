import axios from 'axios'
import config from './config'
//import {} from '../store/action/categoryAction'

// get the categories data
export const getCategories = ()=>{
    return dispatch => {
        dispatch(CategoriesDataBegging());

        //get data from SaoasApi
        return axios.get(`http://192.168.1.4:8000/productCulture`)
            .then(response =>{

                if (response.status === 200){
                    dispatch(CategoriesDataSuccess(response.data))
                    console.log(response.data);
                } else{
                    throw Error(response.status)
                }
                
            }).catch(err => {
                dispatch(CategoriesDataFail(err.message));
                console.log("what you did wrong is : ",err.message);
            })
    }
};