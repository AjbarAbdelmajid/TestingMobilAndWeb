export const NEWS_DATA_SUCCESS = 'NEWS_DATA_SUCCESS';
export const IS_DATA_ENDED = 'IS_DATA_ENDED';
export const NEWS_DATA_BEGIN = 'NEWS_DATA_BEGIN';


export const NewsDataBegin = () =>({
    type: NEWS_DATA_BEGIN,
})

export const NewsDataSuccess = (data, Page) =>({
    type: NEWS_DATA_SUCCESS,
    newsPayload: data,
    Page: Page
})

export const isDataEnded = () =>({
    type: IS_DATA_ENDED,
    isNewsDataEnded: true
});