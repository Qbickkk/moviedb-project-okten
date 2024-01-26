import {apiService} from "./apiService";

import {urls} from "../constants";

const movieService = {
    getAll:(page)=>apiService.get(urls.movies.base, {params:{page}}),
    getById:(id)=>apiService.get(urls.movies.byId(id)),
    search:(query)=>apiService.get(urls.movies.searchMovie(query))
};

export {
    movieService
}