const urlMovieDB = 'https://api.themoviedb.org/3';

export const environment = {
  production: true,

  api: {
    trending: `${urlMovieDB}/movie/popular`,
    details: `${urlMovieDB}/movie`,
  },
};
