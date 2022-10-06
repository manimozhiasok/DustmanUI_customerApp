import React from 'react';
import {
  Grid,
  makeStyles,
  Theme,
  Typography,
  useTheme
} from '@material-ui/core';
import { LandingPageRecyclingImage } from 'src/Assets/Images';

const useStyles = makeStyles((theme: Theme) => ({
  outerContainer: {},
  imageContainer: {},
  imagePosition: {
    width: '100%'
  },
  descriptionContainer: {
    width: theme.spacing(62.5),
    background: theme.Colors.primary,
    position: 'relative',
    bottom: theme.spacing(12),
    padding: theme.spacing(6.25, 6.75, 4, 6.25)
  },
  descriptionStyle: {
    color: theme.Colors.whitePure,
    fontSize: theme.MetricsSizes.regular,
    fontWeight: theme.fontWeight.medium
  }
}));

function LandingPageRightContent() {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Grid container className={classes.outerContainer}>
      <Grid item xs={12} className={classes.imageContainer}>
        <img
          src={LandingPageRecyclingImage}
          alt="Sample Recycling Image"
          className={classes.imagePosition}
        />

        <Grid className={classes.descriptionContainer}>
          <Typography className={classes.descriptionStyle}>
            Our range of services enable organizations to reduce the impact of
            their e-waste, maximize their role in saving environment, by
            ensuring sustainable use of resources.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LandingPageRightContent;
