import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';

const Loader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ height: '100%' }}
    >
      <CircularProgress color="primary" />
    </Box>
  );
};

export default Loader;
