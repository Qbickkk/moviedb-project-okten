import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";

const initialState = {
    genres: [],
    moviesByGenre: [],
    page: 1
};

const getAll = createAsyncThunk(
    'genreSlice/getAll',
    async (_,thunkAPI)=>{
        try {
            const {data} = await genreService.getAll();
            return thunkAPI.fulfillWithValue(data)
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const getByGenreId = createAsyncThunk(
    'genreSlice/getByGenreId',
    async ({id,page},thunkAPI)=>{
        try {
            const {data} = await genreService.getById(id,page);
            return thunkAPI.fulfillWithValue(data)
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers:{

    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                const {genres} = action.payload
                state.genres = genres
            })
            .addCase(getByGenreId.fulfilled, (state, action)=>{
                const {results,page} = action.payload
                state.moviesByGenre = results
                state.page = page
            })
});

const {reducer: genreReducer, actions} = genreSlice;

const genreActions = {
    ...actions,
    getAll,
    getByGenreId
};

export {
    genreReducer,
    genreActions
}