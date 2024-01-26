import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {genreActions} from "../../redux";
import css from './GenresContainer.module.css'
const GenresContainer = () => {

    const {genres} = useSelector(state => state.genres);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [dispatch]);

    return (
        <div className={css.Container}>
            <div className={css.GenresContainer}>
                {genres.map(genre=><button key={genre.id} onClick={()=>navigate(`/genre/${genre.id}`)}>{genre.name}</button>)}
            </div>
        </div>
    );
};

export {GenresContainer};