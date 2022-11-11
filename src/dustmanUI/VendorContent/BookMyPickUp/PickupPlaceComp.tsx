import {
  Grid,
  makeStyles,
  Theme,
  Typography,
  useTheme
} from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { CurrencySymbol } from 'src/Assets';

const useStyles = makeStyles<Theme>((theme) => {
  return {
    mainContainer: {
      display: 'flex'
    },
    outerContainer: {
      background: theme.Colors.lightWhiteGrey,
      border: '0.5px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      width: '100%',
      marginBottom: theme.spacing(3),
      padding: theme.spacing(1.5),
      alignItems: 'center'
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: theme.spacing(1),
      justifyContent: 'center'
    },
    imageContainer: {
      paddingRight: theme.spacing(2)
    },
    subText: {
      fontSize: theme.MetricsSizes.small_xxx,
      fontWeight: theme.fontWeight.bold,
      color: theme.Colors.darkGrey
    },
    subText2: {
      fontSize: theme.MetricsSizes.small_x,
      fontWeight: theme.fontWeight.bold,
      color: theme.Colors.primary
    },
    status: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: theme.spacing(1)
    },
    imageStyle: {
      width: '47px',
      height: '47px',
      display: 'grid',
      placeItems: 'center',
      background:
        'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(copper-wire.png)',
      borderRadius: '127.027px'
    }
  };
});

const PickupPlaceComp = ({ data }: { data: any[] }) => {
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <>
      <Typography
        style={{
          marginBottom: theme.spacing(3),
          color: theme.Colors.primary,
          fontWeight: theme.fontWeight.bold,
          fontSize: theme.MetricsSizes.regular
        }}
      >
        {t('PICKUP.trashCategoryPrice')}
      </Typography>
      {data.map((item, index) => {
        return (
          <Grid
            container
            className={classes.outerContainer}
            direction="row"
            key={index}
          >
            <Grid container item xs direction="row">
              <Grid item className={classes.imageContainer}>
                <img
                  src={item.image}
                  alt="order_images"
                  className={classes.imageStyle}
                />
              </Grid>
              <Grid item className={classes.contentContainer}>
                <Typography className={classes.subText}>{item.text}</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Grid className={classes.status}>
                <img src={CurrencySymbol} alt="image" />
                <Typography className={classes.subText2}>
                  {item.price}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};
export default PickupPlaceComp;
