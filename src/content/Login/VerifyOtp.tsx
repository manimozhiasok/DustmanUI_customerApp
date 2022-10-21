import React from 'react';
import { Box, useTheme, Grid } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import {
  ButtonComp,
  LoginHeaderComp,
  TextInputComponent
} from 'src/components';
import { useLocation, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(4)
  }
}));

const VerifyOtp = () => {
  const { state } = useLocation();
  console.log(state, '----11111111111');

  const classes = useStyles();
  const theme = useTheme();
  const navigateTo = useNavigate();
  const { t } = useTranslation();

  const handleCustomerLoginButtonClick = () => {
    navigateTo('/landing-page/create-account', { replace: true });
  };

  return (
    <Grid>
      <LoginHeaderComp
        title={t('LOGIN.loginSignUp')}
        subText={t('LOGIN.enterPhoneVerify')}
      />
      <Grid className={classes.container}>
        <TextInputComponent
          inputHeight={66}
          placeholderText={t('LOGIN.phNumber')}
          value={state}
          //   onChange={handleTextFieldValueChange}
          inputBorderRadius={0}
          textColor={theme.Colors.primary}
          disabled
        />
        <TextInputComponent
          inputHeight={66}
          placeholderText={t('LOGIN.oneTimePassword')}
          //   value={inputVal}
          //   onChange={handleTextFieldValueChange}
          inputBorderRadius={0}
          textColor={theme.Colors.primary}
          type={'number'}
        />
        <ButtonComp
          buttonText={t('LOGIN.verifyOtp')}
          backgroundColor={theme.Colors.secondary}
          btnBorderRadius={theme.MetricsSizes.tiny}
          onClickButton={handleCustomerLoginButtonClick}
          style={{ margin: theme.spacing(3, 0) }}
        />
      </Grid>
    </Grid>
  );
};

export default VerifyOtp;
