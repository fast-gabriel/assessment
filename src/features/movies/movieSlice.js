import { createSlice } from '@reduxjs/toolkit';
import { search } from './omdb';


export const movieSlice = createSlice({
  name: 'movieManager',
  initialState: {
    isLoading: false,
    movies: [],
    selectedMovies: {}
  },
  reducers: {
    loading: (state, action) => {
      state.isLoading = action.payload;
    },
    selectMovie: (state, action) => {
      state.selectedMovies[action.payload.imdbID] = action.payload;
    },
    removeMovie: (state, action) => {
      delete state.selectedMovies[action.payload.imdbID];
    },
    movieList: (state, action) => {
      state.movies = action.payload;
    }
  }
});

// TODO: choose better names (past tense action names? - keep in mind action creators and reducers share a name)
export const { loading, selectMovie, removeMovie, movieList } = movieSlice.actions;


export const searchMovies = term => async dispatch => {
  dispatch(loading(true));

  try {
    const { movies, totalResults } = await search(term);

    // TODO: cache movies list?
    // TODO: paging

    dispatch(movieList(movies));
    dispatch(loading(false));
  } catch (err) {
    // TODO: handle error getting movies
    console.log(err.message);
  }
};

export const availableMovies = state => state.movieManager.movies;
export const isLoading = state => state.movieManager.isLoading;
export const selectedMovies = state => state.movieManager.selectedMovies;

export default movieSlice.reducer;
