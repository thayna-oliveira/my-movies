const urlMovieDB = 'https://api.themoviedb.org/3';

export const environment = {
  production: false,

  api: {
    trending: `${urlMovieDB}/movie/popular`,
    details: `${urlMovieDB}/movie`,
  },
};
