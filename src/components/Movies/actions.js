// action creator
export const actions = {
  getMovies: 'GET_MOVIES',
  getMovieDetail: 'GET_MOVIE_DETAIL',
  resetMovie: 'RESET_MOVIE',
};

export const getMovies = () => async (dispatch) => {
  const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=65fdea35c25da918fb24ceb076bfaae9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
  const movies = await res.json();

  return dispatch({
    type: actions.getMovies,
    payload: movies.results,
  });
};

export const getMovieDetail = id => async (dispatch) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=65fdea35c25da918fb24ceb076bfaae9&language=en-US`);
  const movieDetail = await res.json();

  return dispatch({
    type: actions.getMovieDetail,
    payload: movieDetail,
  });
};

export const resetMovie = () => ({ type: actions.resetMovie });
