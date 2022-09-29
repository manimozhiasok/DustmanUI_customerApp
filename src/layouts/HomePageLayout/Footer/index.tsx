import { ClassNames } from '@emotion/react';
import { useTheme, Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    footerContainer: {
        height: theme.spacing(52),
        background: theme.Colors.primary,
        color: theme.Colors.white
    }

}));

const Footer = () => {
  const theme: Theme = useTheme();
  const classes = useStyles();

  return (
    <Grid className={classes.footerContainer}>
        Footer
    </Grid>
  );
};

export default Footer;
