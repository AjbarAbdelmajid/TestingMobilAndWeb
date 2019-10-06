
import {GET_CULTURES_SUCCESS, GET_CULTURES_FAILURE} from '../actions/culturesAction.js'

const initialState = {
        cultures:[],
        error: null,
};

const CulturesReducer = (state = initialState, action)=>{
    switch (action.type) {
        
        case GET_CULTURES_SUCCESS:
            return {
                ...state,
                cultures: action.culturesPayload,
                error: null,  
            }
        case GET_CULTURES_FAILURE:
            return {
                ...state,
                cultures: [],
                error: action.errorPayload,         
            }
        default:
            return state;
    }
};
export default CulturesReducer