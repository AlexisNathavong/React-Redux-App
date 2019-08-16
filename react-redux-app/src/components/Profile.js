import React from 'react';

import { connect } from 'react-redux';


const Profile = props => {
    return (
        <div>
            <h4>{props.profile.companyName}</h4>
            <img src={props.profile.image} alt="img of Apple company" />
        </div>
    );
}

const mapStateToProps = state => {
    return {
    profile: state.profile
    }
}

export default connect(mapStateToProps)(Profile);