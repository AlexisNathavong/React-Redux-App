export const FETCHING_PROFILE_DATA = 'FETCHING_PROFILE_DATA';


export const getData = () => {
    return (dispatch) => {
        dispatch({ type: 'FETCHING_PROFILE_DATA'});

        //loading, success, and failure attached to dispatch//
    };
};