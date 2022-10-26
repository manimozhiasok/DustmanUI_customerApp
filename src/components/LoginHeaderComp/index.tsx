import React from 'react';
import { Grid, Typography, useTheme } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  container: { display: 'flex', flexDirection: 'column' },
  headingStyle: {
    color: theme.Colors.primary,
    fontWeight: theme.fontWeight.bold
  },
  subStyle: {
    color: theme.Colors.secondary
  },
  bar: {
    height: theme.MetricsSizes.tiny_x,
    width: 81,
    backgroundColor: theme.Colors.primary,
    marginTop: theme.MetricsSizes.small_x,
    marginBottom: theme.MetricsSizes.small_x
  }
}));

type Props = {
  title: string;
  subText?: string;
};
const LoginHeaderComp = (props: Props) => {
  const { title, subText } = props;
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid className={classes.container}>
      <Typography variant="h2" className={classes.headingStyle}>
        {title}
      </Typography>
      <Grid className={classes.bar}></Grid>
      <Typography variant="h5" className={classes.subStyle}>
        {subText}
      </Typography>
    </Grid>
  );
};

export default LoginHeaderComp;
