import { actions } from './actions';

const movies = (
  state = {
    movies: [],
    movieDetail: {},
  },
  action,
) => {
  const { type, payload } = action;

  switch (type) {
    case actions.getMovies: {
      return {
        ...state,
        movies: payload,
      };
    }
    default:
      return state;
  }
};

export default movies;
