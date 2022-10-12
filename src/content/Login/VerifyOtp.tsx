import React from 'react';
import { Box, useTheme, Grid } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import {
  ButtonComp,
  LoginHeaderComp,
  TextInputComponent
} from 'src/components';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(5.8)
  },
  inputStyle: {
    marginTop: 0
  }
}));

const VerifyOtp = () => {
  const classes = useStyles();
  const theme: Theme = useTheme();
  const navigateTo = useNavigate();
  const { t } = useTranslation();

  const handleCustomerLoginButtonClick = () => {
    navigateTo('/homepage', { replace: true });
  };

  return (
    <Grid>
      <LoginHeaderComp
        title={t('LOGIN.login')}
        linkText={t('LOGIN.createAccount')}
        pathName={''}
      />
      <Grid className={classes.container}>
        <TextInputComponent
          inputHeight={66}
          placeholderText={t('LOGIN.phNumber')}
          //   value={inputVal}
          //   onChange={handleTextFieldValueChange}
          inputBorderRadius={0}
          textColor={theme.Colors.primary}
        />
        <TextInputComponent
          inputHeight={66}
          placeholderText={t('LOGIN.oneTimePassword')}
          inputStyles={classes.inputStyle}
          //   value={inputVal}
          //   onChange={handleTextFieldValueChange}
          inputBorderRadius={0}
          textColor={theme.Colors.primary}
        />
        <ButtonComp
          buttonText={t('LOGIN.login')}
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
