import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

import { Poster } from './Movie';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  static propTypes = {
    match: PropTypes.objectOf(PropTypes.any).isRequired,
  }

  state = {
    movie: {},
  }

  async componentDidMount() {
    try {
      // hitting an API and grab some information
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=65fdea35c25da918fb24ceb076bfaae9&language=en-US`);
      const movie = await res.json();
      this.setState({ movie });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { movie } = this.state;

    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={`${movie.id}`}>
            <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
          </Overdrive>
          <div>
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

export default MovieDetail;

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
