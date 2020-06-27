import React from 'react';
import { Paper, InputBase, IconButton, Divider } from '@material-ui/core';
import { Search as SearchIcon, ShoppingCart as ShoppingCartIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '80vw',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  }
}));

export default function Search(props) {
  const { changeHandler, cartClickHandler, cartItems, viewCart } = props;
  const classes = useStyles();

  return (
    <Paper component="div" className={classes.root}>
      <SearchIcon />
      <InputBase
        className={classes.input}
        placeholder="Search Movies"
        inputProps={{ 'aria-label': 'search movies' }}
        onChange={changeHandler}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton color="primary" className={classes.iconButton} aria-label="directions" onClick={cartClickHandler}>
        {
          viewCart
            ? <SearchIcon />
            : (
              <>
                <ShoppingCartIcon />
                { cartItems ? cartItems : null }
              </>
            )
        }
      </IconButton>
    </Paper>
  );
}
