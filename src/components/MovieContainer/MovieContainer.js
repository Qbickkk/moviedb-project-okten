import React from 'react';
import {useNavigate} from "react-router-dom";

import {urls} from "../../constants";
import css from './MovieContainer.module.css'
const MovieContainer = ({movie}) => {
    const {original_title,backdrop_path,overview,adult,budget,original_language,release_date,runtime,status,tagline,genres} = movie;
    const navigate = useNavigate();

    return (
        <div className={css.Container}>
            <h1>{original_title}</h1>
            <div>
            <div className={css.Details}>
                    <img src={urls.imageBase+backdrop_path} alt={original_title}/>
                <div className={css.Description}>
                    <h4>Adult:{adult?'18+':'4+'}</h4>
                    <h4>Budget: {budget?`${budget}$`:'without budget'}</h4>
                    <h4>Original language: {original_language}</h4>
                    <h4>Release date: {release_date}</h4>
                    <h4>Runtime: {runtime}m</h4>
                    <h4>Status: {status}</h4>
                    <h4> Description: {overview}
                        <div>Tagline: {tagline?`"${tagline}"`:'without tagline'}</div>
                    </h4>
                    <h4>
                        <div>Genres:</div>
                        <ul>
                            {genres?genres.map(genre =><li key={genre.id}>{genre.name}</li>):''}
                        </ul>
                    </h4>
                </div>
            </div>
            </div>
            <button className={css.Button}  onClick={()=>navigate(-1)}>Back</button>
        </div>
    );
};

export {MovieContainer};