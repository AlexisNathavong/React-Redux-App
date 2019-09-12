import { FETCH_IMAGE_DATA_START, FETCH_IMAGE_DATA_SUCCESS, FETCH_IMAGE_DATA_FAILURE } from '../actions/ImageActions';


const initialState = [
    {
        author: '',
        width: '',
        height: '',
        url: '',
        download_url: ''
    }
]

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        

        default:
            return state;
    }
}
