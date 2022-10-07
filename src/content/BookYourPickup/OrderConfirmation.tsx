import React from 'react';
import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import OrderData from './OrderData';
import { ButtonComp } from 'src/components';

const useStyles = makeStyles((theme: Theme) => ({
  rootContainer: {
    // padding:theme.spacing(0, 0, 0, 0)
  },
  mainContainer: {
    padding: theme.spacing(1, 37, 0, 3)
    // border:'1px solid green'
  },
  leftContainer: {
    // border:'1px solid green',
    fontFamily: 'DM Sans',
    fontWeight: theme.fontWeight.regular,
    fontSize: theme.MetricsSizes.small_x,
    color: theme.Colors.mediumBlack
  },
  rightContainer: {
    // border:'1px solid green'
    fontFamily: 'DM Sans',
    fontWeight: theme.fontWeight.regular,
    fontSize: theme.MetricsSizes.small_x,
    color: theme.Colors.mediumGrey
  },
  title: {
    fontFamily: 'Source Serif Pro',
    fontWeight: theme.fontWeight.bold,
    fontSize:  theme.MetricsSizes.regular,
    color: theme.Colors.darkBlue
  },
  subtitle: {
    paddingTop: theme.spacing(1),
    fontFamily: 'DM Sans',
    fontWeight: theme.fontWeight.regular,
    fontSize:  theme.MetricsSizes.tiny_xxx,
    color: theme.Colors.mediumBlack
  },
  outerContainer: {
    paddingTop: theme.spacing(6),
    textAlign: 'center'
  },
  buttonContainer: {
    padding: theme.spacing(4, 0),
    textAlign: 'center'
  }
}));

function OrderConfirmation() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="row" className={classes.rootContainer}>
      {OrderData.map((item, index) => {
        return (
          <>
            <Grid container className={classes.mainContainer}>
              <Grid item xs={2} className={classes.leftContainer}>
                {item.leftContent}
              </Grid>
              <Grid item xs={10} className={classes.rightContainer}>
                {item.rightContent}
              </Grid>
            </Grid>
          </>
        );
      })}
      <Grid container className={classes.outerContainer}>
        <Grid item xs={12} className={classes.title}>
          Yay! Good to see you here
        </Grid>
        <Grid item xs={12} className={classes.subtitle}>
          You will be notified when your order confirms
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.buttonContainer}>
        <ButtonComp
          btnBorderRadius={theme.MetricsSizes.large_xx}
          buttonText={'Confirm Order'}
          buttonFontSize={theme.MetricsSizes.small_xxx}
          btnWidth={342}
          height={theme.MetricsSizes.large_xxx}
          buttonFontWeight={500}
        />
      </Grid>
    </Grid>
  );
}

export default OrderConfirmation;
