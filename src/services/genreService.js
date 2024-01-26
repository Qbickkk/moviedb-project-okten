import {apiService} from "./apiService";

import {urls} from "../constants";

const genreService = {
    getAll:()=>apiService.get(urls.genres.base),
    getById:(id,page)=>apiService.get(urls.genres.byGenreId(id,page))
};

export {
    genreService
}