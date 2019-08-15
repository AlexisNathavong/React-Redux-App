import { FETCHING_PROFILE_DATA } from '../actions';


const initialState = {
    profile: {},
    isLoading: false, 
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_PROFILE_DATA:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        default:
            return state;
    }
}