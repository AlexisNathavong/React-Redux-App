import { FETCH_PROFILE_DATA_START, FETCH_PROFILE_DATA_SUCCESS, FETCH_PROFILE_DATA_FAILURE } from '../actions';


const initialState = {
    profile: {},
    isLoading: false, 
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PROFILE_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };

        case FETCH_PROFILE_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                profile: action.payload,
                error: ''
            }
        default:
            return state;
    }
}