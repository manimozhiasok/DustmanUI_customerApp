import React, { useState } from 'react';
import { Grid, makeStyles, Theme, createStyles } from '@material-ui/core';

type Props = {
  background?: string;
};

const useStyles = makeStyles<Theme, Props>((theme: Theme) =>
  createStyles({
    outerContainer: {
      height: theme.spacing(7.25),
      width: theme.spacing(7.25),
      background: (props) =>
        props.background ? props.background : theme.Colors.primary,
      position: 'absolute',
      left: -theme.spacing(6.25),
      top: theme.spacing(2),
      textAlign: 'center',
      paddingTop: theme.spacing(1.75)
    }
  })
);

const IconTileComponent = ({
  iconToDisplay,
  background
}: {
  iconToDisplay?: any;
  background?: string;
}) => {
  const classes = useStyles({
    background
  });

  return (
    <Grid className={classes.outerContainer}>
      <img src={iconToDisplay} alt="icon" />
    </Grid>
  );
};

export default IconTileComponent;
