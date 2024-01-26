import React from 'react';

import {urls} from "../../constants";
import {useNavigate} from "react-router-dom";
import css from './MoviePosterContainer.module.css'
const MoviePosterContainer = ({movie}) => {
    const {title,poster_path,release_date, id} = movie;
    const navigate = useNavigate();
    return (
        <div className={css.Poster} onClick={()=>navigate(`/movie/${id}`)}>
            <img src={urls.imageBase+poster_path} alt={title}/>
            <h3>{title}</h3>
            <h5>{release_date}</h5>
        </div>
    );
};

export {MoviePosterContainer};