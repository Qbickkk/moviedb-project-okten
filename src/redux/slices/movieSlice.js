import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    results: [],
    movie: [],
    page: 1
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page},thunkAPI) => {
       try {
           const {data} = await movieService.getAll(page)
           return thunkAPI.fulfillWithValue(data)
       }catch (e) {
           return thunkAPI.rejectWithValue(e.response.data)
       }
    }
);

const getById = createAsyncThunk(
    'movieSlice/getById',
    async ({id},thunkAPI)=>{
        try {
            const {data} = await movieService.getById(id)
            return thunkAPI.fulfillWithValue(data)
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const search = createAsyncThunk(
    'movieSlice/search',
    async ({query},thunkAPI)=>{
        try {
            const {data} = await movieService.search(query)
            return thunkAPI.fulfillWithValue(data)
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                const {results,page} = action.payload;
                state.results = results;
                state.page = page;
            })
            .addCase(getById.fulfilled, (state, action)=>{
                state.movie = action.payload;
            })
            .addCase(search.fulfilled, (state, action)=>{
                const {results,page} = action.payload;
                state.results = results;
                state.page = page;
            })
});

const {reducer:movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll,
    getById,
    search
};

export {
    movieReducer,
    movieActions
}