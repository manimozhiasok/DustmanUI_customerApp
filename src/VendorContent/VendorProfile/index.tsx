import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({}));

function VendorProfile() {
  const classes = useStyles();
  const theme = useTheme();

  return <>profile page</>;
}

export default VendorProfile;
