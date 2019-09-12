import axios from 'axios';

export const FETCH_IMAGE_DATA_START = 'FETCH_IMAGE_DATA_START';
export const FETCH_IMAGE_DATA_SUCCESS = 'FETCH_IMAGE_DATA_SUCCESS';
export const FETCH_IMAGE_DATA_FAILURE = 'FETCH_IMAGE_DATA_FAILURE';

export const getData = () => {
    return (dispatch) => {
        dispatch({ type: 'FETCH_IMAGE_DATA_START'});
        axios.get('https://picsum.photos/v2/list')
            .then(res => {
                console.log('Image api', res.data)
                dispatch({ type: FETCH_IMAGE_DATA_SUCCESS, payload: res.data})

            })
            .catch(err => {
                console.log('Error in Image api', err.response)
                dispatch({ type: FETCH_IMAGE_DATA_FAILURE, payload: err.response})
            })
    }
}