import React, { useEffect, useState } from 'react';
import { Box, Grid, makeStyles, Tab, Tabs, Theme, useTheme } from '@material-ui/core';
import { ChooseCategoryComponent } from 'src/components';



const useStyles = makeStyles((theme: Theme) => ({

  
}));
function PickupAddress() {
  const classes = useStyles();
  const theme: Theme = useTheme();

  return (
   
      <Grid >
           PickupAddress goes here
    </Grid>
  );
}

export default PickupAddress;
