import axios from 'axios';

export const FETCH_PROFILE_DATA_START = 'FETCH_PROFILE_DATA_START';
export const FETCH_PROFILE_DATA_SUCCESS = 'FETCH_PROFILE_DATA_SUCCESS';
export const FETCH_PROFILE_DATA_FAILURE = 'FETCH_PROFILE_DATA_FAILURE';




export const getData = () => {
    return (dispatch) => {
        dispatch({ type: 'FETCH_PROFILE_DATA_START'});
        axios.get('https://financialmodelingprep.com/api/v3/company/profile/AAPL')
            .then(res => {
                // console.log(res.data.profile);
                dispatch({ type: FETCH_PROFILE_DATA_SUCCESS, payload: res.data.profile})
            })

            .catch(err => {
                dispatch({ type: FETCH_PROFILE_DATA_FAILURE, payload: err.response}); 
        //loading, success, and failure attached to dispatch//
        });
    }
};