import React, { useContext } from 'react';
import { useTheme, Grid, Typography } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { ButtonComp } from 'src/components';
import { useLocation, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { checkImage } from 'src/Assets';
import { LoginDrawerContext } from 'src/contexts/LoginDrawerContext';

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
    fontSize: theme.MetricsSizes.small_xx
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

  const { isLoginDrawerOpen, closeLoginDrawer } =
    useContext(LoginDrawerContext);

  const handleCloseIconClick = () => {
    closeLoginDrawer();
    navigateTo('/dustman', { replace: true });
  };
  const handleContinueClick = () => {
    // if (
    //   !edit.allFilled(...RequiredFields) ||
    //   !isValidEmail(edit.getValue('email'))
    // ) {
    //   setIsError(true);
    //   return;
    // }
    navigateTo('/dustman/vendor-home', {
      state: {
        formEdits: {
          // ...initialValues,
          ...edit.edits
        },
        customerId: state?.customerId
      }
    });
  };
  return (
    <>
      <Grid container className={classes.mainContainer}>
        <Grid item xs={12}>
          <img src={checkImage} width={'93.85px'} height={'93.85px'} />
        </Grid>
        <Grid item xs={12} className={classes.successText}>
          <Typography className={classes.text}>{t('orderPlaced')}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" className={classes.subText}>
            {t('orderConfirm')}
            <br />
            {t('orderDescription')}
          </Typography>
        </Grid>
      </Grid>
      <ButtonComp
        buttonText={'Go to My Orders'}
        backgroundColor={theme.Colors.orangePrimary}
        btnBorderRadius={theme.MetricsSizes.tiny}
        onClickButton={handleContinueClick}
        style={{ margin: theme.spacing(2, 0) }}
      />
    </>
  );
};
