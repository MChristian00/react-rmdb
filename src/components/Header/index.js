import React from'react';

import { Link } from 'react-router-dom';

// Images
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

// Styles
import { Wrapper, Content, RMDBLogoImg, TMDBLogoImg } from './Header.styles';

export const Header = () => {
    return (
            <Wrapper>
                <Content>
                    <Link to='/'>
                    <RMDBLogoImg src={RMDBLogo} alt='rmdb-logo'/>
                    </Link>
                    <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo'/>
                </Content>
            </Wrapper>
    )
};
