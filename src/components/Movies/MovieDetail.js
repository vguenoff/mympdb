import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { objectOf, any, func, bool } from 'prop-types';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

import { getMovieDetail, resetMovie } from './actions';

import { Poster } from './Movie';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  componentDidMount() {
    if (!this.props.movieDetailLoaded) {
      this.props.getMovieDetail(this.props.match.params.id);
    }
  }

  componentWillUnmount() {
    this.props.resetMovie();
  }

  render() {
    const { movieDetail } = this.props;

    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movieDetail.backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={`${movieDetail.id}`}>
            <Poster src={`${POSTER_PATH}${movieDetail.poster_path}`} alt={movieDetail.title} />
          </Overdrive>
          <div>
            <h1>{movieDetail.title}</h1>
            <h3>{movieDetail.release_date}</h3>
            <p>{movieDetail.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

MovieDetail.propTypes = {
  match: objectOf(any).isRequired,
  movieDetail: objectOf(any).isRequired,
  getMovieDetail: func.isRequired,
  resetMovie: func.isRequired,
  movieDetailLoaded: bool.isRequired,
};

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat center / cover;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
    h1 {
      color: #ffd42a;
      background: #111;
    }
  }
  img {
    position: relative;
    top: -5rem;
  }
`;

export default connect(({ movies }) => ({
  movieDetail: movies.movieDetail,
  movieDetailLoaded: movies.movieDetailLoaded,
}), dispatch => bindActionCreators({
  getMovieDetail,
  resetMovie,
}, dispatch))(MovieDetail);
