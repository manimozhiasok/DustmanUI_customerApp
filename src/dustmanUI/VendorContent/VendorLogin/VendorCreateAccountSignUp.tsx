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
import { useEdit } from 'src/hooks/useEdit';
import { useState } from 'react';
import {
  isGSTNumber,
  isLandline,
  isPhoneNumber,
  isValidEmail,
  isValidPinCode,
  isWebsiteName,
  isYear
} from 'src/Utils';
import { TermsAndConditionComp } from 'src/dustmanUI/content/Login/TermsAndConditionComp';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(5)
  }
}));

const VendorCreateAccountSignUp = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();
  const navigateTo = useNavigate();
  const [isError, setIsError] = useState(false);
  const { state }: any = useLocation();

  const initialValues = {
    name: '',
    gst: '',
    full_address: '',
    location: '',
    map_url: '',
    contact_name: '',
    mobile_number: '',
    landline_number: '',
    email_id: '',
    website: '',
    established_year: '',
    vehicle_owned: [],
    order_management_id: '1, 2, 3',
    state: '',
    city: '',
    pincode: ''
  };
  const edit = useEdit(initialValues);
  const RequiredFields = [
    'name',
    'mobile_number',
    'location',
    'full_address',
    'pincode'
  ];
  const companyNameError = isError && !edit.allFilled('name');
  const locationError = isError && !edit.allFilled('location');
  const addressError = isError && !edit.allFilled('full_address');
  const pinCodeError =
    (isError && !edit.allFilled('pincode')) ||
    (isError &&
      edit.allFilled('pincode') &&
      !isValidPinCode(edit.getValue('pincode')));
  const mobileError =
    (isError && !edit.allFilled('mobile_number')) ||
    (isError &&
      edit.allFilled('mobile_number') &&
      !isPhoneNumber(edit.getValue('mobile_number')));
  const EstYearError =
    isError &&
    edit.getValue('established_year') &&
    !isYear(edit.getValue('established_year'));
  const gstError =
    isError && edit.allFilled('gst') && !isGSTNumber(edit.getValue('gst'));
  const websiteError =
    isError &&
    edit.allFilled('website') &&
    !isWebsiteName(edit.getValue('website'));
  const landlineError =
    isError &&
    edit.allFilled('landline_number') &&
    !isLandline(edit.getValue('landline_number'));
  const emailError =
    isError &&
    edit.allFilled('email_id') &&
    !isValidEmail(edit.getValue('email_id'));

  const handleContinueClick = () => {
    if (
      !edit.allFilled(...RequiredFields) ||
      !isPhoneNumber(edit.getValue('mobile_number')) ||
      !isValidPinCode(edit.getValue('pincode')) ||
      (edit.allFilled('email_id') &&
        !isValidEmail(edit.getValue('email_id'))) ||
      (edit.allFilled('established_year') &&
        !isYear(edit.getValue('established_year'))) ||
      (edit.allFilled('gst') && !isGSTNumber(edit.getValue('gst'))) ||
      (edit.allFilled('landline_number') &&
        !isLandline(edit.getValue('landline_number'))) ||
      (edit.allFilled('website') && !isWebsiteName(edit.getValue('website')))
    ) {
      setIsError(true);
      return;
    }
    navigateTo('/dustman/vendor/choose-vehicle-type', {
      state: {
        formEdits: { ...initialValues, ...edit.edits },
        vendorId: state?.vendorId
      },
      replace: true
    });
  };

  return (
    <Grid>
      <LoginHeaderComp
        title={t('LOGIN.signUp')}
        subText={t('LOGIN.userProfile')}
        color={theme.Colors.orangePrimary}
      />
      <Grid className={classes.container}>
        <TextInputComponent
          inputHeight={66}
          placeholderText={t('LOGIN.companyName')}
          value={edit.getValue('name')}
          onChange={(e) => edit.update({ name: e.target.value })}
          inputBorderRadius={0}
          textColor={theme.Colors.primary}
          isError={companyNameError}
          helperText={companyNameError && 'Please enter your company name'}
        />
        <TextInputComponent
          inputHeight={66}
          placeholderText={t('LOGIN.contactName')}
          value={edit.getValue('contact_name')}
          onChange={(e) => edit.update({ contact_name: e.target.value })}
          inputBorderRadius={0}
          textColor={theme.Colors.primary}
        />
        <TextInputComponent
          inputHeight={66}
          placeholderText={t('LOGIN.gstNumber')}
          value={edit.getValue('gst')}
          onChange={(e) => edit.update({ gst: e.target.value })}
          inputBorderRadius={0}
          textColor={theme.Colors.primary}
          helperText={gstError && 'Please enter your valid GST number'}
        />
        <TextInputComponent
          inputHeight={66}
          placeholderText={t('LOGIN.mobileNumber')}
          value={edit.getValue('mobile_number')}
          inputBorderRadius={0}
          textColor={theme.Colors.primary}
          onChange={(e) => {
            if (Number(e.target.value) || e.target.value === '') {
              edit.update({ mobile_number: e.target.value });
            }
          }}
          helperText={mobileError && 'Please enter your valid mobile number'}
          isError={mobileError}
        />
        <TextInputComponent
          inputHeight={66}
          placeholderText={t('LOGIN.email')}
          value={edit.getValue('email_id')}
          onChange={(e) => edit.update({ email_id: e.target.value })}
          inputBorderRadius={0}
          textColor={theme.Colors.primary}
          helperText={emailError && 'Please enter your valid email id'}
        />
        <TextInputComponent
          inputHeight={66}
          placeholderText={t('LOGIN.location')}
          value={edit.getValue('location')}
          onChange={(e) => edit.update({ location: e.target.value })}
          inputBorderRadius={0}
          textColor={theme.Colors.primary}
          isError={locationError}
          helperText={locationError && 'Please enter your location'}
        />
        <TextInputComponent
          inputHeight={66}
          placeholderText={t('LOGIN.address')}
          value={edit.getValue('full_address')}
          onChange={(e) => edit.update({ full_address: e.target.value })}
          inputBorderRadius={0}
          textColor={theme.Colors.primary}
          isError={addressError}
          helperText={addressError && 'Please enter your address detail'}
        />
        <TextInputComponent
          inputHeight={66}
          placeholderText={t('LOGIN.pinCode')}
          value={edit.getValue('pincode')}
          inputBorderRadius={0}
          textColor={theme.Colors.primary}
          onChange={(e) => {
            if (Number(e.target.value) || e.target.value === '') {
              edit.update({ pincode: e.target.value });
            }
          }}
          helperText={pinCodeError && 'Please enter your valid pincode'}
          isError={pinCodeError}
        />

        <TextInputComponent
          inputHeight={66}
          placeholderText={t('LOGIN.website')}
          value={edit.getValue('website')}
          onChange={(e) => edit.update({ website: e.target.value })}
          inputBorderRadius={0}
          textColor={theme.Colors.primary}
          helperText={websiteError && 'Please enter your valid website'}
        />
        <TextInputComponent
          inputHeight={66}
          placeholderText={t('LOGIN.landlineNumber')}
          value={edit.getValue('landline_number')}
          onChange={(e) => edit.update({ landline_number: e.target.value })}
          inputBorderRadius={0}
          textColor={theme.Colors.primary}
          helperText={
            landlineError && 'Please enter your valid landline number'
          }
        />
        <TextInputComponent
          inputHeight={66}
          placeholderText={t('LOGIN.establishedYear')}
          value={edit.getValue('established_year')}
          inputBorderRadius={0}
          textColor={theme.Colors.primary}
          onChange={(e) => {
            if (Number(e.target.value) || e.target.value === '') {
              edit.update({ established_year: e.target.value });
            }
          }}
          helperText={
            EstYearError && 'Please enter your valid established year'
          }
        />
        <ButtonComp
          buttonText={t('LOGIN.continue')}
          backgroundColor={theme.Colors.orangePrimary}
          btnBorderRadius={theme.MetricsSizes.tiny}
          onClickButton={handleContinueClick}
          style={{ margin: theme.spacing(2, 0) }}
        />
        <TermsAndConditionComp />
      </Grid>
    </Grid>
  );
};

export default VendorCreateAccountSignUp;
