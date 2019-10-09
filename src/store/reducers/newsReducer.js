import {NEWS_DATA_SUCCESS} from '../actions/newsAction'
import { type } from 'os'

const initialState = {
    Allnews: []
}

export const NewsReducer = (state = initialState, action) => {
    switch(type.action){
        case NEWS_DATA_SUCCESS:
            return {
                ...state,
                Allnews: state.Allnews.concat(action.newsPayload)
            }
        default:
            return state;
    }
}