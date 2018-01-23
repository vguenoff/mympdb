import React, { Component } from 'react';

import Movie from './Movie';

class MovieList extends Component {
  state = {
    movies: [],
  }

  async componentDidMount() {
    try {
      // hitting an API and grab some information
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=65fdea35c25da918fb24ceb076bfaae9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();

      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        {movies.map(movie =>
          <Movie key={movie.id} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
