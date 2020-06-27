import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import MovieItem from './MovieItem';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  list: {
    padding: theme.spacing(2.5)
  }
}));


export default function MovieList(props) {
  const { movies, selected, toggleMovieSelected } = props;
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container className={classes.list} wrap="wrap" spacing={3}>
          {
            movies.map((item) => (
              <MovieItem
                item={item}
                toggleMovieSelected={toggleMovieSelected}
                selected={!!selected[item.imdbID]}
              />
            ))
          }
        </Grid>
      </Grid>
    </Grid>
  );
}
