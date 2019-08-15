import React from 'react';

import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import Profile from './Profile';

const ProfileList = props => {
    return (
        <>
        <h1>Welcome to Stock Profiles App</h1>
        <button>
            {props.isLoading ?
            (<Loader 
            type="Watch"
            color="#00BFFF"
            height="30"
            width="30"
            />) :
            ('Get Profile Data')}
        </button>
        {props.profiles && props.profiles.map(profile => (
            <Profile key={profile.companyName} profile={profile} />
        ))}
        </>
    );
}

const mapToStateProps = state => {
    return {
        isLoading: state.isLoading,
        profiles: state.profiles
    };
};

export default connect(mapToStateProps, {})(ProfileList);