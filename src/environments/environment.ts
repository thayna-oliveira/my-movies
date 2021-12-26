const urlMovieDB = 'https://api.themoviedb.org/3';

export const environment = {
  production: false,

  api: {
    popularMovies: `${urlMovieDB}/movie/popular`,
    details: `${urlMovieDB}/movie`,
    genre: `${urlMovieDB}/genre/movie/list`,
    discover: `${urlMovieDB}/discover/movie`,
  },
};
