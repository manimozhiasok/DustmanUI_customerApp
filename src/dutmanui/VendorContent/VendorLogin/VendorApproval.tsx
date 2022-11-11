import { useTheme, Grid, Typography } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { ButtonComp } from 'src/components';
import { useLocation, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { CheckImageVendor } from 'src/Assets';

const useStyles = makeStyles((theme: Theme) => ({
  loginDrawerStyle: {},
  imageStyle: {},
  text: {
    color: theme.Colors.black,
    fontFamily: 'Source Serif Pro',
    fontWeight: theme.fontWeight.bold,
    fontSize: theme.MetricsSizes.regular_xxx,
    paddingBottom: theme.spacing(3)
  },
  subText: {
    color: theme.Colors.lightBlueGrey,
    fontWeight: theme.fontWeight.regular,
    fontSize: theme.MetricsSizes.small_xx,
    paddingBottom: theme.spacing(3)
  },
  mainContainer: {
    textAlign: 'center'
  },
  successText: {
    paddingTop: theme.spacing(3)
  }
}));

export const VendorApproval = (edit) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();
  const navigateTo = useNavigate();
  const { state }: any = useLocation();

  const handleBackToHomeButtonClick = () => {
    navigateTo('/dustman', {
      replace: true
    });
  };
  return (
    <>
      <Grid container className={classes.mainContainer}>
        <Grid item xs={12}>
          <img
            src={CheckImageVendor}
            width={'93.85px'}
            height={'93.85px'}
            color={theme.Colors.orangePrimary}
          />
        </Grid>
        <Grid item xs={12} className={classes.successText}>
          <Typography className={classes.text}>
            {t('LOGIN.registrationSuccessful')}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" className={classes.subText}>
            {t('LOGIN.registrationConfirmation')}
            <br />
            {t('orderDescription')}
          </Typography>
        </Grid>
      </Grid>
      <ButtonComp
        buttonText={t('LOGIN.backToHome')}
        backgroundColor={theme.Colors.orangePrimary}
        btnBorderRadius={theme.MetricsSizes.tiny}
        onClickButton={handleBackToHomeButtonClick}
        style={{ margin: theme.spacing(2, 0) }}
      />
    </>
  );
};
