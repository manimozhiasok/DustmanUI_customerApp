import {
  Button,
  Grid,
  makeStyles,
  Theme,
  Typography,
  useTheme
} from '@material-ui/core';
import { useState } from 'react';
import { ButtonComp, TextInputComponent } from 'src/components';
import Plus from '../../Assets/Images/Plus.svg';
import { useTranslation } from 'react-i18next';
import OTPInput, { ResendOTP } from 'otp-input-react';
import { API_SERVICES } from 'src/Services';
import { HTTP_STATUSES } from 'src/Config/constant';
import useUserInfo from 'src/hooks/useUserInfo';
import { useEdit } from 'src/hooks/useEdit';

const useStyles = makeStyles((theme: Theme) => ({
  buttonStyle: {
    color: theme.Colors.secondary,
    border: 'none',
    fontWeight: theme.fontWeight.bold,
    fontSize: theme.MetricsSizes.small_xx + 1,
    textTransform: 'none',
    background: 'none',
    padding: 0,
    marginBottom: 12
  }
}));

const ProfileContent = ({
  handleAddNewItem,
  handleEditListItem
}: {
  handleEditListItem?: () => void;
  handleAddNewItem?: () => void;
}) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const classes = useStyles();
  const { userDetails, userAddressDetails } = useUserInfo();
  const [isEditable, setIsEditable] = useState<any>(true);
  const [isText, setIsText] = useState(false);

  const initialValues = {
    first_name: userDetails?.first_name || '',
    last_name: userDetails?.last_name || '',
    email: userDetails?.email || '',
    mobile_number: userDetails?.mobile_number || ''
  };
  const edit = useEdit(initialValues);

  const handleEdit = () => {
    setIsEditable(true);
  };

  const OtpInputCard = ({ ...rest }) => {
    const [OTP, setOTP] = useState('');
    return (
      <Grid>
        <OTPInput value={OTP} onChange={setOTP} {...rest} />
      </Grid>
    );
  };

  const onUploadFiles = async (event: any) => {
    let formData = new FormData();
    let selectedImages = event.target.files;
    for (let key in selectedImages) {
      formData.append('file', selectedImages[key]);
    }
    // const uploadImageRes: any =
    //   await API_SERVICES.imageUploadService.uploadImage(formData);
    // if (uploadImageRes?.status < HTTP_STATUSES.BAD_REQUEST) {
    //   if (uploadImageRes?.data?.images.length) {
    //     let imageData = [];
    //     uploadImageRes?.data?.images.map((item) => {
    //       imageData.push({ image_url: item.Location });
    //     });
    //     if (imageData?.length) {
    //       // edit.update({
    //       //   order_images: [...uploadedImages, ...imageData]
    //       // });
    //     }
    //   }
    // }
  };

  const handleChange = (event) => {
    edit.update({ [event.target.name]: event.target.value });
  };

  return (
    <Grid container justifyContent="center" spacing={3}>
      <Grid item xs={12}>
        <TextInputComponent
          inputLabel={t('PROFILE.firstName')}
          inputLabelFont={theme.MetricsSizes.small_x}
          labelColor={theme.Colors.whiteGreyLight}
          variant="standard"
          autoFocus
          value={edit.getValue('first_name')}
          name="first_name"
          onChange={handleChange}
          // disabled={isEditable}
          iconEnd={
            <Button
              className={classes.buttonStyle}
              onClick={() => setIsText(!isText)}
            >
              {!isText ? t('PROFILE.edit') : 'SAVE'}
            </Button>
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextInputComponent
          inputLabel={t('PROFILE.lastName')}
          inputLabelFont={theme.MetricsSizes.small_x}
          labelColor={theme.Colors.whiteGreyLight}
          variant="standard"
          autoFocus
          onChange={handleChange}
          value={edit.getValue('last_name')}
          name="last_name"
          //disabled={isEditable}
          iconEnd={
            <Button
              className={classes.buttonStyle}
              onClick={() => setIsText(!isText)}
            >
              {!isText ? t('PROFILE.edit') : 'SAVE'}
            </Button>
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextInputComponent
          inputLabel={t('PROFILE.emailAddress')}
          inputLabelFont={theme.MetricsSizes.small_x}
          labelColor={theme.Colors.whiteGreyLight}
          variant="standard"
          autoFocus
          onChange={handleChange}
          value={edit.getValue('email')}
          name="email"
          // disabled={isEditable}
          iconEnd={
            <Button
              className={classes.buttonStyle}
              onClick={() => setIsText(!isText)}
            >
              {!isText ? t('PROFILE.edit') : 'SAVE'}
            </Button>
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextInputComponent
          inputLabel={t('PROFILE.phoneNumber')}
          inputLabelFont={theme.MetricsSizes.small_x}
          labelColor={theme.Colors.whiteGreyLight}
          variant="standard"
          autoFocus
          onChange={handleChange}
          value={edit.getValue('mobile_number')}
          name="mobile_number"
          //disabled={!isText}
          iconEnd={
            <Button
              className={classes.buttonStyle}
              onClick={() => setIsText(!isText)}
            >
              {!isText ? t('PROFILE.edit') : 'SAVE'}
            </Button>
          }
        ></TextInputComponent>
        {isText && (
          <Grid style={{ marginTop: theme.MetricsSizes.tiny_xxx }}>
            <Grid item xs={12}>
              <OtpInputCard
                inputClassName="bottom__border"
                // autoFocus
                OTPLength={6}
                otpType="number"
                disabled={false}
                isInputNum
                inputStyles={{
                  border: 0,
                  borderBottom: '1px solid #6BB043'
                }}
              />
            </Grid>
            <Grid container item xs={12} alignItems="center">
              <Typography
                variant="body1"
                style={{
                  color: theme.Colors.whiteGreyLight
                }}
              >
                {t('PROFILE.havingTrouble')}
              </Typography>
              <Button
                className={classes.buttonStyle}
                style={{
                  marginBottom: 0,
                  marginLeft: theme.MetricsSizes.tiny_x
                }}
                onClick={() => console.log('Resend clicked')}
              >
                {t('PROFILE.resendOTP')}
              </Button>
            </Grid>
            <Grid
              item
              container
              style={{
                display: 'flex',
                marginTop: theme.MetricsSizes.small_xxx
              }}
            >
              <Grid item xs={3}>
                <ButtonComp
                  buttonText={t('PROFILE.verify')}
                  //onClickButton={() => setIsText(false)}
                  btnBorderRadius={4}
                  btnWidth={'167px'}
                  height={'48px'}
                  buttonFontSize={theme.MetricsSizes.small_xxx}
                />
              </Grid>

              <Grid item xs={3}>
                <ButtonComp
                  buttonText={t('ORDER.cancelButton')}
                  buttonTextColor={theme.Colors.secondary}
                  backgroundColor={theme.Colors.white}
                  variant="outlined"
                  onClickButton={() => setIsText(false)}
                  btnBorderRadius={4}
                  btnWidth={'167px'}
                  height={'48px'}
                  buttonFontSize={theme.MetricsSizes.small_xxx}
                />
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>

      <Grid item xs={12}>
        <TextInputComponent
          inputLabel={t('PROFILE.profileAddress')}
          inputLabelFont={theme.MetricsSizes.small_x}
          labelColor={theme.Colors.whiteGreyLight}
          variant="standard"
          //disabled={!isText}
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
      <Grid container item xs={12} justifyContent="center">
        <ButtonComp
          buttonText={'ADD NEW ADDRESS'}
          backgroundColor={theme.Colors.white}
          buttonFontSize={theme.MetricsSizes.small_xx + 1}
          variant="outlined"
          buttonTextColor={theme.Colors.secondary}
          buttonFontWeight={theme.fontWeight.bold}
          btnWidth={'190px'}
          style={{
            marginTop: theme.MetricsSizes.small,
            alignSelf: 'center',
            padding: theme.MetricsSizes.tiny_x
          }}
          startIcon={<img src={Plus} />}
          onClickButton={handleAddNewItem}
        />
      </Grid>
    </Grid>
  );
};
export default ProfileContent;
