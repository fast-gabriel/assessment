import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import MovieSkeleton from './MovieSkeleton';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  list: {
    padding: theme.spacing(2.5)
  }
}));


export default function MovieLoading() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container className={classes.list} wrap="wrap" spacing={3}>
          {
            Array.from(new Array(10)).map((item, index) => (
              <MovieSkeleton key={index} />
            ))
          }
        </Grid>
      </Grid>
    </Grid>
  );
}
