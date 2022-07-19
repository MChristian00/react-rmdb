import { useState, useEffect } from "react";

// API
import API from '../API'

//Import Dummy Data
import {Data} from '../Dummy';

const initialState = {
    page: 0,
    totalPages: 0,
    totalResults:0,
    results: []
};



export const useHomeFetch = () => {
    const [state, setState] = useState(Data);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    // console.log("DummyData", Data)


    const fetchMovies = async (page, searchTerm = '') => {
        try{
            setError(false)
            setLoading(true);
            const movies = await API.fetchMovies(searchTerm, page)          
            setState(prev => ({
                ...movies,
                results: 
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));
        }
        catch(error){
            setError(true)
        }
        setLoading(false)
    };

    //Initial and Search
    useEffect(()=>{
        setState(initialState)
        fetchMovies(1, searchTerm);
    }, [searchTerm])

    //Load More
    useEffect(() => {
      if(!isLoadingMore) return;
      fetchMovies(state.page+1, searchTerm);
      setIsLoadingMore(false);
      }, [isLoadingMore, searchTerm, state.page])
    

    return {state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore}; 
}