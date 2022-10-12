import React, { useState } from 'react';
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
import { TermsAndConditionComp } from './TermsAndConditionComp';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(5)
  },
  headingStyle: {
    color: theme.Colors.primary,
    fontSize: theme.MetricsSizes.large_x,
    fontWeight: theme.fontWeight.bold
  },
  subStyle: {
    fontSize: theme.MetricsSizes.regular,
    color: theme.Colors.secondary,
    marginLeft: theme.MetricsSizes.tiny_xx
  },
  boldText: {
    color: theme.Colors.primary,
    fontWeight: theme.fontWeight.bold
  }
}));

const CustomerLogin = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const theme: Theme = useTheme();
  const navigateTo = useNavigate();
  const [inputVal, setInputVal] = useState('');

  const handleCustomerLoginButtonClick = () => {
    navigateTo('/landing-page/verify-otp');
  };

  const handleTextFieldValueChange = (event) => {
    setInputVal(event.target.value);
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
          inputHeight={70}
          placeholderText={t('LOGIN.phNumber')}
          value={inputVal}
          onChange={handleTextFieldValueChange}
          inputBorderRadius={0}
          textColor={theme.Colors.primary}
        />
        <ButtonComp
          buttonText={t('LOGIN.login')}
          backgroundColor={theme.Colors.secondary}
          btnBorderRadius={theme.MetricsSizes.tiny}
          onClickButton={handleCustomerLoginButtonClick}
          style={{ margin: theme.spacing(2, 0) }}
        />
        <TermsAndConditionComp />
      </Grid>
    </Grid>
  );
};

export default CustomerLogin;
