import React, { useState } from 'react';
import { useTheme, Grid } from '@material-ui/core';
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
import { isPhoneNumber } from 'src/Utils';
import { API_SERVICES } from 'src/Services';
import { HTTP_STATUSES } from 'src/Config/constant';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(4)
  }
}));

const VendorPageLogin = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();
  const navigateTo = useNavigate();
  const [inputVal, setInputVal] = useState('');
  const [isError, setIsError] = useState(false);

  const handleVendorLoginButtonClick = async () => {
    if (inputVal === '' || !isPhoneNumber(inputVal)) {
      setIsError(true);
      return;
    }
    let data = {
      phoneNumber: inputVal
    };
    const response: any = await API_SERVICES.vendorRegisterService.generateOtp({
      data
    });
    if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
      if (response?.data?.phoneNumber) {
        navigateTo('/dustman/vendor-login/verify-otp', {
          replace: true,
          state: { mobileNumber: response?.data?.phoneNumber }
        });
      }
    }
  };

  const handleTextFieldValueChange = (event) => {
    setInputVal(event.target.value);
  };

  return (
    <Grid>
      <LoginHeaderComp
        title={t('LOGIN.loginSignUp')}
        subText={t('LOGIN.enterPhoneNumber')}
      />
      <Grid className={classes.container}>
        <TextInputComponent
          inputHeight={70}
          placeholderText={t('LOGIN.phNumber')}
          value={inputVal}
          onChange={handleTextFieldValueChange}
          inputBorderRadius={0}
          textColor={theme.Colors.primary}
          helperText={
            ((isError && inputVal === '') ||
              (isError && inputVal !== '' && !isPhoneNumber(inputVal))) &&
            'Please enter your 10 digit mobile number for verification'
          }
        />
        <ButtonComp
          buttonText={t('LOGIN.next')}
          backgroundColor={theme.Colors.secondary}
          btnBorderRadius={theme.MetricsSizes.tiny}
          onClickButton={handleVendorLoginButtonClick}
          style={{ margin: theme.spacing(2, 0) }}
        />
        <TermsAndConditionComp />
      </Grid>
    </Grid>
  );
};

export default VendorPageLogin;
