import React, { useEffect } from 'react';

//Config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config';

//Components
import {HeroImage} from './HeroImage';
import { Grid } from './Grid';

//Hook
import { useHomeFetch } from '../hooks/useHomeFetch';

//Image
import NoImage from '../images/no_image.jpg';
import { Thumb } from './Thumb';
import Spinner from './Spinner';
import { SearchBar } from './SearchBar';
import { Button } from './Button';

export const Home = () => {
    const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore} = useHomeFetch();
    console.log('loading', loading)
    console.log('state', JSON.stringify(state));
    
    
    if(error) return <div>SOMETHING WENT WRONG</div>
    
    let MOST_POPULAR_MOVIE = state ? state.results[0] : null;
    return (
    <>
        {!searchTerm && MOST_POPULAR_MOVIE ?
        (<HeroImage 
        image = {`${IMAGE_BASE_URL}${BACKDROP_SIZE}${MOST_POPULAR_MOVIE.backdrop_path}`}
        title = {MOST_POPULAR_MOVIE.original_title}
        text = {MOST_POPULAR_MOVIE.overview}
        />) : null}

        <SearchBar setSearchTerm={setSearchTerm}/>
           
        {!loading && state.results && <Grid header={searchTerm ? 'Search Results' : 'Popular Movies'}>
                    {state.results.map(movie=>(
                        <Thumb movieId={movie.id} key={movie.id} image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage} clickable/>
                    ))}
        </Grid>}

        {loading && <Spinner/>}
        {state.page < state.total_pages && !loading && (
            <Button text='Load More' callback={()=> setIsLoadingMore(true)}/>
        )}
    </> 
    );
}