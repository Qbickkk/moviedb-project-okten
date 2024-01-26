import React, {useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";

import css from './Pagination.module.css'
import {genreActions, movieActions} from "../../redux";
const Pagination = () => {

    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
            if (id){
                dispatch(genreActions.getByGenreId({id,page}))
            }else {
                dispatch(movieActions.getAll({page}))
            }
    }, [page, dispatch, id]);


    const prevHandler = () => {
        setQuery(prev => {
            prev.set('page', `${+page - 1}`)
            return prev
        })
    };

    const nextHandler = () => {
        setQuery(prev => {
            prev.set('page', `${+page + 1}`)
            return prev
        })
    };

    return (
        <div className={css.Pagination}>
            <button className={css.Button} disabled={page<=1} onClick={prevHandler}>prev</button>
            <button className={css.Button} disabled={page>=500} onClick={nextHandler}>next</button>
        </div>
    );
};

export {Pagination};