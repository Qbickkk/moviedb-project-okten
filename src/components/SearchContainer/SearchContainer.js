import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {movieActions} from "../../redux";


const SearchContainer = () => {

    const dispatch = useDispatch();
    const [query, setQuery] = useState("");

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(movieActions.search({query}))
    }

    const onSearch = (search) => {
        setQuery(search)
    }


    return (
        <form onSubmit={(e)=>onSubmit(e)}>
            <input type={'text'} placeholder={'search'} name={'params'} onChange={(e)=>onSearch(e.target.value)}/>
            <button>Find</button>
        </form>
    );
};

export {SearchContainer};