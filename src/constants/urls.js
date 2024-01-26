const baseURL = 'https://api.themoviedb.org/3';
const access_token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTdmOTIyZmQ1ZmIxNGEwMTRiZTgzMGY4MjU1OTE2ZCIsInN1YiI6IjY0ZTRmNGQxNTI1OGFlMDBhZGQyZmVjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yOA7hOnSh1Ge-Pye5oCdMMqBlGI_xeCghQhldmKAJ44';
const movies = '/discover/movie';
const movie = '/movie';
const genres ='/genre/movie/list';
const imageBase='https://image.tmdb.org/t/p/w500';

const urls = {
    movies:{
        base: movies,
        byId: (id)=>`${movie}/${id}`,
        searchMovie:(query)=>`search/movie?query=${query}`
    },
    genres:{
        base: genres,
        byGenreId: (id,page ) => `${movies}?with_genres=${id}&page=${page}`
    },
    imageBase
};

export {
    baseURL,
    access_token,
    urls
}