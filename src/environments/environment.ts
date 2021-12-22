// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const urlMovieDB = 'https://api.themoviedb.org/3';

export const environment = {
  production: false,

  api: {
    trending: `${urlMovieDB}/trending/tv/day`,
  },
};
