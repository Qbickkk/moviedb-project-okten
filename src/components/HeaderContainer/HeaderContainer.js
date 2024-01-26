import React from 'react';
import {NavLink} from "react-router-dom";

import css from './HeaderContainer.module.css'
import {SearchContainer} from "../SearchContainer";
const HeaderContainer = () => {
    return (
        <div className={css.Header}>
            <div className={css.HeaderBanner}>
               <h1>Qbickkk</h1>
            </div>
            <div className={css.Nav}>
                <div className={css.Title}>TheMovieDB</div>
                <div className={css.Links}>
                    <NavLink to={'movies'}>Movies</NavLink>
                    <NavLink to={'genres'}>Genres</NavLink>
                   <SearchContainer/>
                </div>
            </div>
        </div>
    );
};

export {HeaderContainer};