import React from 'react';

import { Card, Author, Images } from './StyledWidgets';

const Image = props => {
    return (
        <Card>
            <Author>
                <h2>{props.author}</h2>
            </Author>
            <Images>
            <img src={props.image} alt="photography" width="200px" />
            </Images>
            <p>{props.height}</p>
            <p>{props.width}</p>
        </Card>
    )
}



export default Image;