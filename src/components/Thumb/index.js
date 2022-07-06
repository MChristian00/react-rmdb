import React from 'react';

import { Link } from 'react-router-dom';

//Styles
import { Image } from './Thumb.styles';

export const Thumb = ({image, movieId, clickable}) => (
    <div>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <Image src={image} alt='movie-thumbnail'></Image>
            </Link>
        ): (
            <Image src={image} alt='movie-thumbnail'></Image>
        )}
    </div>
)