import React from 'react';
import { Grid, Typography, useTheme } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  contentContainer: {},
  headingStyle: {
    color: theme.Colors.primary,
    fontSize: theme.MetricsSizes.large_x,
    fontWeight: theme.fontWeight.bold
  },
  subStyle: {
    fontSize: theme.MetricsSizes.regular,
    color: theme.Colors.secondary,
    marginLeft: theme.MetricsSizes.tiny_xx,
    textDecoration: 'none'
  },
  subHeadingStyle: { display: 'flex', alignItems: 'center' },
  bar: {
    height: theme.MetricsSizes.tiny_x,
    width: 81,
    backgroundColor: theme.Colors.primary,
    marginTop: theme.MetricsSizes.small_x
  }
}));

type Props = {
  title: string;
  linkText: string;
  pathName: string;
};
const LoginHeaderComp = (props: Props) => {
  const { title, linkText, pathName } = props;
  const classes = useStyles();
  const theme: Theme = useTheme();
  return (
    <>
      <Typography className={classes.headingStyle}>{title}</Typography>
      <Grid className={classes.subHeadingStyle}>
        <Typography variant="h5">or</Typography>
        <Typography
          variant="h5"
          className={classes.subStyle}
          component={Link}
          to={pathName}
        >
          {linkText}
        </Typography>
      </Grid>
      <Grid className={classes.bar}></Grid>
    </>
  );
};

export default LoginHeaderComp;
