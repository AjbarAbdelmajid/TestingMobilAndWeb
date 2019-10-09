import {
    NEWS_DATA_BEGIN,
    NEWS_DATA_SUCCESS,
    IS_DATA_ENDED} from '../actions/newsAction'

const initialState = {
    news: [],
    currentPage: 0,
    isNewsDataEnded: true,
    test: 0,
}

const NewsReducer = (state = initialState, action) => {
    switch(action.type){
        case NEWS_DATA_BEGIN:
            return {
                ...state,
                news: [],
                isNewsDataEnded: false,
            }
        case NEWS_DATA_SUCCESS:
            return {
                ...state,
                news: state.news.concat(action.newsPayload),
                currentPage: action.Page,
                isNewsDataEnded: false,
            }
        case IS_DATA_ENDED:
            return {
                ...state,
                isNewsDataEnded: true,
            }

        default:
            return state;
    }
}
export default NewsReducer