import React from 'react';
import {
  Grid,
  makeStyles,
  Theme,
  Typography,
  useTheme
} from '@material-ui/core';
import { ButtonComp } from 'src/components';
import { useTranslation } from 'react-i18next';
import ArrowsLeftRight from '../../Assets/Images/ArrowsLeftRight.svg';
import CopperImage from '../../Assets/Images/CopperImage.svg';
import PickupPlaceComp from './PickupPlaceComp';

const useStyles = makeStyles((theme: Theme) => ({
  outerContainer: {
    padding: theme.spacing(2),
    textAlign: 'center',
    border: '1px dashed ',
    borderColor: '#D9D9D9',
    borderRadius: '16px',
    marginTop: theme.spacing(3),
    height: '81px',
    width: '342px'
  },
  buttonContainer: {
    padding: theme.spacing(4, 26)
  },
  heading: {
    color: theme.Colors.lightBlack,
    fontSize: theme.MetricsSizes.small_xxx,
    fontWeight: theme.fontWeight.regular
  },
  place: {
    color: theme.Colors.primary,
    fontWeight: theme.fontWeight.bold,
    fontSize: theme.MetricsSizes.regular
  },
  placeName: {
    fontSize: theme.MetricsSizes.small_xx,
    fontWeight: theme.fontWeight.regular
  },
  distance: {
    textAlign: 'center',
    marginTop: theme.spacing(3),
    fontSize: theme.MetricsSizes.small_x
  }
}));
const PickupPlace = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation();
  const data = [
    {
      image: CopperImage,
      text: 'Iron',
      price: '63.49'
    },
    {
      image: CopperImage,
      text: 'Copper',
      price: '55.39'
    },
    {
      image: CopperImage,
      text: 'Stainless Steel',
      price: '83.45'
    }
  ];
  return (
    <>
      <Typography className={classes.heading}>{t('vehicleChoose')}</Typography>
      <Grid container justifyContent="center" xs={12}>
        <Grid
          item
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className={classes.outerContainer}
          xs={6}
        >
          <Grid item>
            <Typography className={classes.place}>
              {t('PICKUP.from')}
              <br />
              <span className={classes.placeName}>{'Ambattur'}</span>
            </Typography>
          </Grid>
          <Grid item>
            <img src={ArrowsLeftRight} alt="image" />
          </Grid>
          <Grid item>
            <Typography className={classes.place}>
              {t('PICKUP.to')}
              <br />
              <span className={classes.placeName}>{'Sriperumputhur'}</span>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Typography className={classes.distance}>
        {t('PICKUP.totalDistance')}{' '}
        <span style={{ color: theme.Colors.orangePrimary }}>{'45 Kms'}</span>
      </Typography>
      <PickupPlaceComp data={data} />
      <Grid
        container
        justifyContent="center"
        item
        xs={12}
        className={classes.buttonContainer}
      >
        <ButtonComp
          btnBorderRadius={theme.MetricsSizes.large_xx}
          buttonText={t('PICKUP.confirm')}
          buttonFontSize={theme.MetricsSizes.small_xxx}
          btnWidth={342}
          height={theme.MetricsSizes.large_xxx}
          buttonFontWeight={theme.fontWeight.medium}
          onClickButton={() => {
            console.log('click');
          }}
          backgroundColor={theme.Colors.orangePrimary}
        />
      </Grid>
    </>
  );
};
export default PickupPlace;
