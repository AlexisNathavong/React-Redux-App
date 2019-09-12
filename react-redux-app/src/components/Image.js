import React from 'react';
// import { connect } from 'react-redux';

const Image = props => {
    return (
        <div>
            <h2>{props.author}</h2>
            <img src={props.url} alt="imgs of photography" />
            <p>{props.height}</p>
            <p>{props.width}</p>
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//        data: state.data,
//     }
// }

export default Image;