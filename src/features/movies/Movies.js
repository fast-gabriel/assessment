import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { makeStyles } from '@material-ui/core/styles';
import Search from './Search';
import MovieList from './MovieList';
import MovieLoading from './MovieLoading';
import {
  isLoading,
  selectMovie,
  removeMovie,
  searchMovies,
  movieList,
  availableMovies,
  selectedMovies
} from './movieSlice';


const useStyles = makeStyles((theme) => ({
  header: {
    minHeight: '75px',
    display: 'flex',
    flexDirection: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A3A3A7',
    color: '#364A63'
  },
  full: {
    minHeight: '100vh'
  }
}));


export default function Movies() {
  const [hasTyped, setHasTyped] = useState(false);
  const [viewCart, setviewCart] = useState(false);
  const loading = useSelector(isLoading);
  const movies = useSelector(availableMovies);
  const selected = useSelector(selectedMovies);
  const dispatch = useDispatch();

  const [debouncedSearchMovies] = useDebouncedCallback((...args) => {
    dispatch(searchMovies(...args));
  }, 500);

  const classes = useStyles();

  const toggleMovieSelected = (movie) => {
    if (selected[movie.imdbID]) {
      return dispatch(removeMovie(movie));
    }
    return dispatch(selectMovie(movie));
  };

  const changeHandler = (event) => {
    dispatch(movieList([]));
    setHasTyped(true);
    setviewCart(false);
    debouncedSearchMovies(event.target.value);
  };

  const cartClickHandler = () => {
    setviewCart(!viewCart);
  };

  const cartItems = Object.values(selected);

  return (
    <>
      <header className={`${classes.header} ${!hasTyped && classes.full}`}>
        <Search changeHandler={changeHandler} cartItems={cartItems.length} cartClickHandler={cartClickHandler} viewCart={viewCart} />
      </header>
      {
        loading
        ? <MovieLoading />
        : <MovieList movies={viewCart ? cartItems : movies} selected={selected} toggleMovieSelected={toggleMovieSelected} />
      }
    </>
  );
}
