import React, { useState } from 'react';
import { useTheme, Grid } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import {
  ButtonComp,
  LoginHeaderComp,
  TextInputComponent
} from 'src/components';
import { useLocation, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { isOneTimePassWord, setVendorId } from 'src/Utils';
import { API_SERVICES } from 'src/dutmanui/Services';
import { HTTP_STATUSES } from 'src/Config/constant';
import useVendorInfo from 'src/hooks/useVendorInfo';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(4)
  }
}));

const VendorVerifyOtp = () => {
  const { state }: any = useLocation();
  const classes = useStyles();
  const theme = useTheme();
  const navigateTo = useNavigate();
  const { t } = useTranslation();
  const [inputVal, setInputVal] = useState('');
  const [isError, setIsError] = useState(false);
  const { updateVendorInfo } = useVendorInfo();

  const handleVendorLoginButtonClick = async () => {
    if (inputVal === '' || !isOneTimePassWord(inputVal)) {
      setIsError(true);
      return;
    }
    let data = {
      mobile_number: state?.mobileNumber,
      otp: inputVal
    };
    const response: any = await API_SERVICES.vendorRegisterService.verifyOtp({
      data
    });
    if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
      if (response?.data?.vendor) {
        navigateTo('/dustman/vendor/create-account', {
          replace: true,
          state: { vendorId: response.data.vendor.id }
        });
      } else if (response?.data?.vendorProfile?.vendor_id) {
        if (response.data.vendorProfile.status_id === 1) {
          navigateTo('/dustman/vendor/vendor-approval', {
            replace: true
          });
        } else if (response.data.vendorProfile.status_id === 2) {
          updateVendorInfo(response?.data?.vendorProfile?.vendor_id);
          setVendorId(response.data.vendorProfile.vendor_id);
          navigateTo('/dustman/vendor-home', { replace: true });
        }
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
        color={theme.Colors.orangePrimary}
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
          type="tel"
          helperText={
            ((isError && inputVal === '') ||
              (isError && inputVal !== '' && !isOneTimePassWord(inputVal))) &&
            'Please enter your valid 6 digit otp sent to your mobile number'
          }
        />
        <ButtonComp
          buttonText={t('LOGIN.verifyOtp')}
          backgroundColor={theme.Colors.orangePrimary}
          btnBorderRadius={theme.MetricsSizes.tiny}
          onClickButton={handleVendorLoginButtonClick}
          style={{ margin: theme.spacing(3, 0) }}
        />
      </Grid>
    </Grid>
  );
};

export default VendorVerifyOtp;
