import React, {useEffect} from 'react';

import {MoviePosterContainer, Pagination} from "../../components";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {genreActions} from "../../redux";

const GenrePage = () => {

    const {id} = useParams();
    const {moviesByGenre} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genreActions.getByGenreId({id}))
    }, [dispatch, id]);

    return (
        <div>
            {moviesByGenre.map(movie=><MoviePosterContainer key={movie.id} movie={movie}/>)}
            <Pagination/>
        </div>
    );
};

export {GenrePage};