import { FETCH_IMAGE_DATA_START, FETCH_IMAGE_DATA_SUCCESS, FETCH_IMAGE_DATA_FAILURE } from '../actions/ImageActions';


const initialState = {
   data: {},
   isLoading: false,
   error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_IMAGE_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };

        case FETCH_IMAGE_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: ''
            };

        default:
            return state;
    }
}
