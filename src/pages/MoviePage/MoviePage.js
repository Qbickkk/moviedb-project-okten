import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {MovieContainer} from "../../components";
import {movieActions} from "../../redux";

const MoviePage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {movie} = useSelector(state => state.movies);

    useEffect(() => {
        dispatch(movieActions.getById({id}))
    }, [dispatch]);

    return (
        <div>
            <MovieContainer movie={movie}/>
        </div>
    );
};

export {MoviePage};