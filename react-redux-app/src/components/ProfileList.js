import React from 'react';

import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getData } from '../actions';

import Profile from './Profile';

const ProfileList = props => {
    return (
        <>
        <h1>Welcome to Stock Profiles App</h1>
        <button onClick={props.getData}>
            {props.isLoading ?
            (<Loader 
            type="Watch"
            color="#00BFFF"
            height="30"
            width="30"
            />) :
            ('Get Profile Data')}
        </button>
        
            <Profile  />
       
        </>
    );
}

const mapToStateProps = state => {
    return {
        isLoading: state.isLoading,
        
    };
};

export default connect(mapToStateProps, { getData })(ProfileList);