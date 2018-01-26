import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { arrayOf, object, bool, string, func } from 'prop-types';
import styled from 'styled-components';

import { getMovies } from './actions';

import Movie from './Movie';

class MovieList extends PureComponent {
  componentDidMount() {
    const { movieListLoaded, movieListLoadedAt } = this.props;
    const oneHour = 60 * 60 * 1000;

    if (!movieListLoaded || ((new Date()) - new Date(movieListLoadedAt)) > oneHour) {
      this.props.getMovies();
    }
  }

  render() {
    const { movieList } = this.props;

    return (
      <MovieGrid>
        {movieList.map(movie =>
          <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    );
  }
}

MovieList.propTypes = {
  movieList: arrayOf(object).isRequired,
  movieListLoaded: bool.isRequired,
  movieListLoadedAt: string.isRequired,
  getMovies: func.isRequired,
};

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;

export default connect(({ movies }) => ({
  movieList: movies.movieList,
  movieListLoaded: movies.movieListLoaded,
  movieListLoadedAt: movies.movieListLoadedAt,
}), dispatch => bindActionCreators({
  getMovies,
}, dispatch))(MovieList);
