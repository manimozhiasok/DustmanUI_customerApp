import React, { useState } from 'react';
import {
  Button,
  Grid,
  makeStyles,
  Theme,
  Typography,
  useTheme
} from '@material-ui/core';
import { ButtonComp, TextInputComponent } from 'src/components';
import PlusOrange from 'src/Assets/Images/PlusOrange.svg';
import { useTranslation } from 'react-i18next';
import OTPInput from 'otp-input-react';
import { API_SERVICES } from 'src/dustmanUI/Services';
import { HTTP_STATUSES } from 'src/Config/constant';
import useVendorInfo from 'src/hooks/useVendorInfo';
import { useEdit } from 'src/hooks/useEdit';
import { isOneTimePassWord, isPhoneNumber } from 'src/Utils';
import toast from 'react-hot-toast';

const useStyles = makeStyles((theme: Theme) => ({
  buttonStyle: {
    color: theme.Colors.orangePrimary,
    border: 'none',
    fontWeight: theme.fontWeight.bold,
    fontSize: theme.MetricsSizes.small_xx + 1,
    textTransform: 'none',
    background: 'none',
    padding: 0,
    marginBottom: theme.MetricsSizes.small_x,
    display: 'flex',
    alignItems: 'center'
  },
  cancelButtonStyle: {
    color: theme.Colors.greyAccent,
    border: 'none',
    fontWeight: theme.fontWeight.bold,
    fontSize: theme.MetricsSizes.small_xx,
    textTransform: 'none',
    background: 'none',
    padding: 0,
    marginBottom: theme.MetricsSizes.small_x
  },
  inputOtpStyle: {
    borderRadius: 0,
    borderBottom: '1px solid #6BB043',
    background: 'transparent'
  },
  locTextStyle: {
    color: theme.Colors.darkBlue,
    fontWeight: theme.fontWeight.medium
  }
}));

type Props = {
  handleEditListItem?: () => void;
  handleAddNewAddress?: () => void;
  handleSaveEdits?: (data: any) => void;
  handleVerifyOtpNumber?: (data: any, successMessage: string) => void;
};

const ProfileContent = ({
  handleAddNewAddress,
  handleEditListItem,
  handleSaveEdits,
  handleVerifyOtpNumber
}: Props) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const classes = useStyles();
  const { vendorAddressDetails, vendorDetails, updateVendorInfo } =
    useVendorInfo();
  const [isError, setIsError] = useState(false);
  const [isEdit, setIsEdit] = useState<number>(0);
  const [isOtpField, setIsOtpField] = useState<boolean>(false);

  const initialValues = {
    name: vendorDetails?.name || '',
    contact_name: vendorDetails?.contact_name || '',
    email_id: vendorDetails?.email_id || '',
    mobile_number: vendorDetails?.mobile_number?.slice(2) || '',
    new_mobile_number: '',
    otp: ''
  };
  const edit = useEdit(initialValues);

  const handleVerifyPhnOrResendOtp = async () => {
    try {
      if (edit.getValue('mobile_number') === initialValues.mobile_number) {
        toast.error('New mobile number must be different from the current');
        return;
      }
      if (
        edit.getValue('mobile_number') &&
        !isPhoneNumber(edit.getValue('mobile_number'))
      ) {
        setIsError(true);
        return;
      }
      let data = {
        phoneNumber: edit.getValue('mobile_number')
      };
      const response: any =
        await API_SERVICES.vendorRegisterService.generateOtp({
          data,
          successMessage: 'OTP sent successfully'
        });
      if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
        if (response?.data?.phoneNumber) {
          edit.update({ new_mobile_number: response.data.phoneNumber });
          setIsOtpField(true);
        }
      }
    } catch (e) {
      console.log(e, '--profile update err--');
    }
  };

  const handleVerifyOtp = async () => {
    try {
      if (!edit.getValue('otp') || !isOneTimePassWord(edit.getValue('otp'))) {
        toast.error(
          'Please enter your valid 6 digit otp sent to your mobile number'
        );
        return;
      }
      let data = {
        mobile_number: edit.getValue('new_mobile_number'),
        otp: edit.getValue('otp')
      };
      let successMessage = 'Phone number updated successfully!';
      let response: any = await handleVerifyOtpNumber(data, successMessage);
      if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
        setIsEdit(0);
        setIsOtpField(false);
      }
    } catch (e) {
      console.log(e, '--profile update err--');
    }
  };

  const handleChange = (event) => {
    edit.update({ [event.target.name]: event.target.value });
  };

  const handleClickEditBtn = (editEvent: any) => {
    edit.reset();
    setIsEdit(parseInt(editEvent.currentTarget.id));
  };

  const handleClickSaveBtn = async () => {
    if (edit.edits && Object.keys(edit.edits).length === 0) {
      setIsEdit(0);
      return;
    }
    let data = { ...edit.edits };
    let response: any = await handleSaveEdits(data);
    if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
      setIsEdit(0);
    }
  };

  const handleClickCancelBtn = () => {
    edit.reset();
    setIsEdit(0);
    setIsOtpField(false);
  };

  const EditComp = ({ btnId }: { btnId?: number }) => {
    return isEdit === btnId ? (
      <>
        <Button
          id={btnId.toString()}
          className={classes.cancelButtonStyle}
          onClick={handleClickCancelBtn}
        >
          {t('PROFILE.cancel')}
        </Button>
        <Button
          id={btnId.toString()}
          className={classes.buttonStyle}
          onClick={handleClickSaveBtn}
        >
          {t('PROFILE.save')}
        </Button>
      </>
    ) : (
      <Button
        id={btnId.toString()}
        className={classes.buttonStyle}
        onClick={handleClickEditBtn}
      >
        {t('PROFILE.edit')}
      </Button>
    );
  };
  return (
    <Grid container justifyContent="center" spacing={3}>
      <Grid item xs={12}>
        <TextInputComponent
          inputLabel={t('PROFILE.companyName')}
          inputLabelFont={theme.MetricsSizes.small_x}
          labelColor={theme.Colors.whiteGreyLight}
          inputBorder={theme.Colors.orangePrimary}
          variant="standard"
          value={edit.getValue('name')}
          name="name"
          onChange={handleChange}
          disabled={isEdit !== 1}
          inputRef={(ele) => {
            if (ele) {
              ele.focus();
            }
          }}
          iconEnd={<EditComp btnId={1} />}
        />
      </Grid>
      <Grid item xs={12}>
        <TextInputComponent
          inputLabel={t('PROFILE.contactName')}
          inputLabelFont={theme.MetricsSizes.small_x}
          labelColor={theme.Colors.whiteGreyLight}
          inputBorder={theme.Colors.orangePrimary}
          variant="standard"
          onChange={handleChange}
          value={edit.getValue('contact_name')}
          inputRef={(ele) => {
            if (ele) {
              ele.focus();
            }
          }}
          name="contact_name"
          disabled={isEdit !== 2}
          iconEnd={<EditComp btnId={2} />}
        />
      </Grid>
      <Grid item xs={12}>
        <TextInputComponent
          inputLabel={t('PROFILE.emailAddress')}
          inputLabelFont={theme.MetricsSizes.small_x}
          labelColor={theme.Colors.whiteGreyLight}
          inputBorder={theme.Colors.orangePrimary}
          variant="standard"
          onChange={handleChange}
          value={edit.getValue('email_id')}
          inputRef={(ele) => {
            if (ele) {
              ele.focus();
            }
          }}
          name="email_id"
          disabled={isEdit !== 3}
          iconEnd={<EditComp btnId={3} />}
        />
      </Grid>
      <Grid item xs={12}>
        <TextInputComponent
          inputLabel={t('PROFILE.phoneNumber')}
          inputLabelFont={theme.MetricsSizes.small_x}
          labelColor={theme.Colors.whiteGreyLight}
          inputBorder={theme.Colors.orangePrimary}
          variant="standard"
          onChange={handleChange}
          value={edit.getValue('mobile_number')}
          name="mobile_number"
          inputRef={(ele) => {
            if (ele) {
              ele.focus();
            }
          }}
          disabled={isEdit !== 4 || isOtpField}
          iconEnd={
            isEdit !== 4 && (
              <Button
                id={'4'}
                className={classes.buttonStyle}
                onClick={handleClickEditBtn}
              >
                {t('PROFILE.edit')}
              </Button>
            )
          }
          helperText={
            ((isError && !edit.getValue('mobile_number')) ||
              (isError &&
                edit.getValue('mobile_number') &&
                !isPhoneNumber(edit.getValue('mobile_number')))) &&
            'Please enter your valid 10 digit mobile number'
          }
        />
      </Grid>
      {isEdit === 4 && isOtpField && (
        <Grid item container xs={12}>
          <Grid item xs={12}>
            <OTPInput
              OTPLength={6}
              otpType="number"
              autoFocus
              inputClassName={classes.inputOtpStyle}
              value={edit.getValue('otp')}
              onChange={(val: any) => edit.update({ otp: val })}
            />
          </Grid>
          <Grid container item xs={6} alignItems="center">
            <Grid item>
              <Typography
                variant="body1"
                style={{
                  color: theme.Colors.whiteGreyLight
                }}
              >
                {t('PROFILE.havingTrouble')}
              </Typography>
            </Grid>
            <Grid item>
              <Button
                className={classes.buttonStyle}
                style={{
                  marginBottom: 0,
                  marginLeft: theme.MetricsSizes.tiny_x
                }}
                onClick={handleVerifyPhnOrResendOtp}
              >
                {t('PROFILE.resendOTP')}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
      {isEdit === 4 && (
        <Grid item xs={12} container>
          <Grid item>
            <ButtonComp
              buttonText={isOtpField ? 'Verify OTP' : t('PROFILE.verify')}
              onClickButton={
                isOtpField ? handleVerifyOtp : handleVerifyPhnOrResendOtp
              }
              backgroundColor={theme.Colors.orangePrimary}
              btnBorderRadius={4}
              btnWidth={'167px'}
              height={'48px'}
              buttonFontSize={theme.MetricsSizes.small_xxx}
              disabled={edit.edits && Object.keys(edit.edits).length === 0}
            />
          </Grid>
          <Grid item>
            <ButtonComp
              buttonText={t('ORDER.cancelButton')}
              style={{
                border: '1px solid',
                borderColor: theme.Colors.orangePrimary,
                marginLeft: theme.MetricsSizes.tiny_xx
              }}
              buttonTextColor={theme.Colors.orangePrimary}
              backgroundColor={theme.Colors.white}
              variant="outlined"
              onClickButton={handleClickCancelBtn}
              btnBorderRadius={theme.MetricsSizes.tiny}
              btnWidth={'167px'}
              height={'48px'}
              buttonFontSize={theme.MetricsSizes.small_xxx}
            />
          </Grid>
        </Grid>
      )}
      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Typography
            style={{
              fontSize: theme.MetricsSizes.small_x,
              color: theme.Colors.whiteGreyLight
            }}
          >
            {t('PROFILE.profileAddress')}
          </Typography>
        </Grid>
        <Grid container item xs={12}>
          {vendorAddressDetails?.length ? (
            vendorAddressDetails.map((item, index) => {
              return (
                <Grid
                  key={index}
                  item
                  xs={12}
                  style={{ marginBottom: theme.spacing(5) }}
                >
                  <TextInputComponent
                    variant="standard"
                    disabled
                    value={item?.address}
                    inputBorder={theme.Colors.orangePrimary}
                    iconEnd={
                      <Button
                        className={classes.buttonStyle}
                        onClick={handleEditListItem}
                      >
                        {t('PROFILE.edit')}
                      </Button>
                    }
                  />
                </Grid>
              );
            })
          ) : (
            <Typography className={classes.locTextStyle}>
              No address found!, Please add your addresses here.
            </Typography>
          )}
        </Grid>
      </Grid>
      <Grid container item xs={12} justifyContent="center">
        <ButtonComp
          buttonText={'ADD NEW ADDRESS'}
          backgroundColor={theme.Colors.white}
          buttonFontSize={theme.MetricsSizes.small_xx + 1}
          variant="outlined"
          buttonTextColor={theme.Colors.orangePrimary}
          buttonFontWeight={theme.fontWeight.bold}
          btnWidth={'190px'}
          style={{
            borderColor: theme.Colors.orangePrimary,
            borderRadius: theme.MetricsSizes.tiny,
            alignSelf: 'center',
            padding: theme.MetricsSizes.tiny_x
          }}
          startIcon={<img src={PlusOrange} alt="plus" />}
          onClickButton={handleAddNewAddress}
        />
      </Grid>
    </Grid>
  );
};
export default React.memo(ProfileContent);
