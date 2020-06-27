import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';


export default function MovieSkeleton(props) {
  const { key } = props;

  return (
    <Grid key={key} item>
      <Box
        width={152}
        textAlign="left"
      >
        <Skeleton variant="rect" width={152} height={228} />
        <Box pt={0.5}>
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      </Box>
    </Grid>
  );
}
