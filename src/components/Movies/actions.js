// action creator
export const actions = {
  getMovies: 'GET_MOVIES',
};

export const getMovies = () => async (dispatch) => {
  const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=65fdea35c25da918fb24ceb076bfaae9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
  const movies = await res.json();

  return dispatch({
    type: actions.getMovies,
    payload: movies.results,
  });
};
