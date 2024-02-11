import React, { useState} from 'react';
import {useDispatch} from "react-redux";
import {movieActions} from "../../redux";


const SearchContainer = () => {

    const dispatch = useDispatch();
    const [query, setQuery] = useState('');


    const search = (e) => {
        e.preventDefault();
        setQuery(e.target.film.value)
        dispatch(movieActions.search({query}))
    }

    return (
        <form onSubmit={search}>
            <input type='text' placeholder={'search'} name={'film'}/>
            <button>Find</button>
        </form>
    );
};

export {SearchContainer};