export const NEWS_DATA_SUCCESS = 'NEWS_DATA_SUCCESS'

export const NewsDataSuccess = (data) =>({
    type: NEWS_DATA_SUCCESS,
    newsPayload: data,
})