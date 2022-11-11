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
    order_management_id: '',
    state: '',
    city: '',
    pincode: ''
  };
  const edit = useEdit(initialValues);
  const RequiredFields = [
    'name',
    'gst',
    'mobile_number',
    'email_id',
    'location',
    'full_address',
    'pincode',
    'contact_name',
    'website',
    'landline_number',
    'established_year'
  ];

  const handleContinueClick = () => {
    if (
      !edit.allFilled(...RequiredFields) ||
      !isValidEmail(edit.getValue('email_id')) ||
      !isPhoneNumber(edit.getValue('mobile_number')) ||
      !isValidPinCode(edit.getValue('pincode')) ||
      !isGSTNumber(edit.getValue('gst')) ||
      !isLandline(edit.getValue('landline_number')) ||
      !isValidEmail(edit.getValue('email_id')) ||
      !isWebsiteName(edit.getValue('website')) ||
      !isYear(edit.getValue('established_year'))
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
          helperText={
            isError && !edit.allFilled('name') && 'Please Enter your name'
          }
        />
        <TextInputComponent
          inputHeight={66}
          placeholderText={t('LOGIN.contactName')}
          value={edit.getValue('contact_name')}
          onChange={(e) => edit.update({ contact_name: e.target.value })}
          inputBorderRadius={0}
          textColor={theme.Colors.primary}
          helperText={
            isError &&
            !edit.allFilled('contact_name') &&
            'Please Enter your contact name'
          }
        />
        <TextInputComponent
          inputHeight={66}
          placeholderText={t('LOGIN.gstNumber')}
          value={edit.getValue('gst')}
          onChange={(e) => edit.update({ gst: e.target.value })}
          inputBorderRadius={0}
          textColor={theme.Colors.primary}
          helperText={
            ((isError && !edit.getValue('gst')) ||
              (isError &&
                edit.getValue('gst') &&
                !isGSTNumber(edit.getValue('gst')))) &&
            'Please enter your valid GST number'
          }
        />
        <TextInputComponent
          inputHeight={66}
          placeholderText={t('LOGIN.mobileNumber')}
          value={edit.getValue('mobile_number')}
          onChange={(e) => edit.update({ mobile_number: e.target.value })}
          inputBorderRadius={0}
          textColor={theme.Colors.primary}
          helperText={
            ((isError && !edit.getValue('mobile_number')) ||
              (isError &&
                edit.getValue('mobile_number') &&
                !isPhoneNumber(edit.getValue('mobile_number')))) &&
            'Please enter your valid mobile number'
          }
        />
        <TextInputComponent
          inputHeight={66}
          placeholderText={t('LOGIN.email')}
          value={edit.getValue('email_id')}
          onChange={(e) => edit.update({ email_id: e.target.value })}
          inputBorderRadius={0}
          textColor={theme.Colors.primary}
          helperText={
            ((isError && !edit.allFilled('email_id')) ||
              (isError && !isValidEmail(edit.getValue('email_id')))) &&
            'Please Enter your valid email address'
          }
        />
        <TextInputComponent
          inputHeight={66}
          placeholderText={t('LOGIN.location')}
          value={edit.getValue('location')}
          onChange={(e) => edit.update({ location: e.target.value })}
          inputBorderRadius={0}
          textColor={theme.Colors.primary}
          helperText={
            isError &&
            !edit.allFilled('location') &&
            'Please Enter your location'
          }
        />
        <TextInputComponent
          inputHeight={66}
          placeholderText={t('LOGIN.address')}
          value={edit.getValue('full_address')}
          onChange={(e) => edit.update({ full_address: e.target.value })}
          inputBorderRadius={0}
          textColor={theme.Colors.primary}
          helperText={
            isError &&
            !edit.allFilled('full_address') &&
            'Please Enter your full address'
          }
        />
        <TextInputComponent
          inputHeight={66}
          placeholderText={t('LOGIN.pinCode')}
          value={edit.getValue('pincode')}
          onChange={(e) => edit.update({ pincode: e.target.value })}
          inputBorderRadius={0}
          textColor={theme.Colors.primary}
          helperText={
            ((isError && !edit.getValue('pincode')) ||
              (isError &&
                edit.getValue('pincode') &&
                !isValidPinCode(edit.getValue('pincode')))) &&
            'Please enter your valid pincode'
          }
        />

        <TextInputComponent
          inputHeight={66}
          placeholderText={t('LOGIN.website')}
          value={edit.getValue('website')}
          onChange={(e) => edit.update({ website: e.target.value })}
          inputBorderRadius={0}
          textColor={theme.Colors.primary}
          helperText={
            ((isError && !edit.getValue('website')) ||
              (isError &&
                edit.getValue('website') &&
                !isWebsiteName(edit.getValue('website')))) &&
            'Please enter your website'
          }
        />
        <TextInputComponent
          inputHeight={66}
          placeholderText={t('LOGIN.landlineNumber')}
          value={edit.getValue('landline_number')}
          onChange={(e) => edit.update({ landline_number: e.target.value })}
          inputBorderRadius={0}
          textColor={theme.Colors.primary}
          helperText={
            ((isError && !edit.getValue('landline_number')) ||
              (isError &&
                edit.getValue('landline_number') &&
                !isLandline(edit.getValue('landline_number')))) &&
            'Please enter your valid landline number'
          }
        />
        <TextInputComponent
          inputHeight={66}
          placeholderText={t('LOGIN.establishedYear')}
          value={edit.getValue('established_year')}
          onChange={(e) => edit.update({ established_year: e.target.value })}
          inputBorderRadius={0}
          textColor={theme.Colors.primary}
          helperText={
            ((isError && !edit.getValue('established_year')) ||
              (isError &&
                edit.getValue('established_year') &&
                !isYear(edit.getValue('established_year')))) &&
            'Please enter your established year'
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
