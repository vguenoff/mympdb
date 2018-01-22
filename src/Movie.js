import React from 'react';
import { shape, string } from 'prop-types';

const Movie = ({ movie }) => (
  <div>
    <h4>{movie.title}</h4>
    <p>{movie.overview}</p>
  </div>
);

Movie.propTypes = {
  movie: shape({
    title: string.isRequired,
    overview: string.isRequired,
  }).isRequired,
};

export default Movie;
