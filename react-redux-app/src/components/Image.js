import React from 'react';
import { connect } from 'react-redux';

const Image = props => {
    return (
        <div>
            <h2>{props.data.author}</h2>
        </div>
    )
}

const mapStateToProps = state => {
    return {
       data: state.data,
    }
}

export default connect(mapStateToProps)(Image);