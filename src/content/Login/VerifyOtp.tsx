import React, { useState } from 'react';
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
import { isOneTimePassWord, setCustomerId } from 'src/Utils';
import { API_SERVICES } from 'src/Services';
import { HTTP_STATUSES } from 'src/Config/constant';
import useUserInfo from 'src/hooks/useUserInfo';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(4)
  }
}));

const VerifyOtp = () => {
  const { state }: any = useLocation();

  const classes = useStyles();
  const theme = useTheme();
  const navigateTo = useNavigate();
  const { t } = useTranslation();
  const [inputVal, setInputVal] = useState('');
  const [isError, setIsError] = useState(false);
  const { updateUserInfo } = useUserInfo();

  const handleCustomerLoginButtonClick = async () => {
    if (inputVal === '' || !isOneTimePassWord(inputVal)) {
      setIsError(true);
      return;
    }
    let data = {
      mobile_number: state?.mobileNumber,
      otp: inputVal
    };
    const response: any = await API_SERVICES.customerRegisterService.verifyOtp({
      data
    });
    if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
      if (response?.data?.customer) {
        navigateTo('/dustman/customer/create-account', {
          replace: true,
          state: { customerId: response.data.customer.id }
        });
      } else if (response?.data?.customerProfile?.customer_id) {
        updateUserInfo(response?.data?.customerProfile?.customer_id);
        setCustomerId(response.data.customerProfile.customer_id);
        navigateTo('/dustman/customer-home', { replace: true });
      }
    }
  };

  const handleChange = (event) => {
    setInputVal(event.target.value);
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
          value={state?.mobileNumber?.slice(2)}
          inputBorderRadius={0}
          textColor={theme.Colors.primary}
          disabled
        />
        <TextInputComponent
          inputHeight={66}
          placeholderText={t('LOGIN.oneTimePassword')}
          value={inputVal}
          onChange={handleChange}
          inputBorderRadius={0}
          textColor={theme.Colors.primary}
          type={'number'}
          helperText={
            ((isError && inputVal === '') ||
              (isError && inputVal !== '' && !isOneTimePassWord(inputVal))) &&
            'Please enter your valid 6 digit otp sent to your mobile number'
          }
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
