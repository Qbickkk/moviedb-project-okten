import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";

import {MoviePosterContainer} from "../MoviePosterContainer";
import css from './MoviesContainer.module.css'
const MoviesContainer = () => {

    const {results, page} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll(page))
    }, [dispatch]);

    return (
        <div className={css.Movies}>
            {results.map(movie=><MoviePosterContainer key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesContainer};