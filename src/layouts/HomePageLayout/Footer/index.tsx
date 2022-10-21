import { ClassNames } from '@emotion/react';
import { useTheme, Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  footerContainer: {
    height: 100,
    background: theme.Colors.primary,
    color: theme.Colors.white
  }
}));

const Footer = () => {
  const theme = useTheme();
  const classes = useStyles();

  return <Grid className={classes.footerContainer}>Footer</Grid>;
};

export default Footer;
