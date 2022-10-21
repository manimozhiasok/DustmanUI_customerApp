import React, { useEffect, useState } from 'react';
import { Box, Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { DustmanLogoHorizontal } from 'src/Assets/Images';

const useStyles = makeStyles((theme: Theme) => ({
  logoContainer: {
    padding: theme.spacing(3, 0, 0, 12.5)
  }
}));

function HeaderLeftContent() {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Box className={classes.logoContainer}>
      <img src={DustmanLogoHorizontal} alt="Dustman Logo" />
    </Box>
  );
}

export default HeaderLeftContent;
