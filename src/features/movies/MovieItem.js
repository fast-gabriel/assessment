import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid, GridListTile, GridListTileBar, IconButton } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';


const useStyles = makeStyles((theme) => ({
  listItem: {
    listStyle: 'none'
  },
  titleBar: {
    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
  icon: {
    color: 'white'
  }
}));


export default function MovieItem(props) {
  const { item, selected, toggleMovieSelected } = props;
  const { Title, Poster, imdbID, Year } = item;
  const classes = useStyles();

  return (
    <Grid key={imdbID} item>
      <Box
        width={152}
        textAlign="left"
      >
        <GridListTile key={imdbID} className={classes.listItem}>
          <img style={{ width: 152, height: 228 }} alt={Title} src={Poster} />
          <GridListTileBar
            className={classes.titleBar}
            titlePosition="bottom"
            actionPosition="right"
            actionIcon={
              <IconButton
                aria-label={`star ${Title}`}
                className={classes.icon}
                onClick={() => {toggleMovieSelected(item);}}
              >
                {
                  selected
                    ? <RemoveShoppingCartIcon />
                    : <AddShoppingCartIcon />
                }
              </IconButton>
            }
          />
        </GridListTile>
        <Box pr={2}>
          <Typography gutterBottom variant="body2">
            {Title}
          </Typography>
          <Typography display="block" variant="caption" color="textSecondary">
            {Year}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}
