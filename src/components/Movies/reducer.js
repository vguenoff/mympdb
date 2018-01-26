import { actions } from './actions';

const movies = (
  state = {
    movieList: [],
    movieListLoaded: false,
    movieListLoadedAt: null,
    movieDetail: {},
    movieDetailLoaded: false,
  },
  action,
) => {
  const { type, payload } = action;

  switch (type) {
    case actions.getMovies: {
      return {
        ...state,
        movieList: payload,
        movieListLoaded: true,
        movieListLoadedAt: new Date(),
      };
    }
    case actions.getMovieDetail: {
      return {
        ...state,
        movieDetail: payload,
        movieDetailLoaded: true,
      };
    }
    case actions.resetMovie: {
      return {
        ...state,
        movieDetail: {},
        movieDetailLoaded: false,
      };
    }
    default:
      return state;
  }
};

export default movies;
