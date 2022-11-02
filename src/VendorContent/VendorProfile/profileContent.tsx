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
import { color } from '@mui/system';
const useStyles = makeStyles((theme: Theme) => ({
  buttonStyle: {
    color: theme.Colors.secondary,
    border: 'none',
    fontWeight: theme.fontWeight.bold,
    fontSize: theme.MetricsSizes.small_xx,
    fontFamily: 'DM Sans',
    textTransform: 'none'
  },
  buttonContainer: {
    alignSelf: 'flex-end'
  }
}));

const ProfileContent = ({
  handleAddNewItem,
  handleEditListItem
}: {
  handleEditListItem: () => void;
  handleAddNewItem: () => void;
}) => {
  const [isEditable, setIsEditable] = useState<any>(true);
  const [isText, setIsText] = useState(false);
  const theme = useTheme();
  const { t } = useTranslation();
  const classes = useStyles();

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
  };

  return (
    <Grid container justifyContent="center">
      <Grid
        container
        spacing={2}
        style={{ padding: theme.spacing(0, 0, 0, 0) }}
      >
        <Grid
          item
          xs={12}
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            paddingTop: theme.spacing(2)
          }}
        >
          <ButtonComp
            buttonText={isEditable ? t('PROFILE.edit') : 'SAVE'}
            backgroundColor={theme.Colors.white}
            buttonFontSize={theme.MetricsSizes.small_xx}
            variant="outlined"
            buttonTextColor={theme.Colors.secondary}
            buttonFontWeight={theme.fontWeight.bold}
            btnWidth={'80px'}
            height={'30px'}
            onClickButton={() => setIsEditable(!isEditable)}
            style={{ border: 'none' }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextInputComponent
            inputLabel={t('PROFILE.firstName')}
            inputLabelFont={12}
            labelColor={theme.Colors.whiteGreyLight}
            variant="standard"
            disabled={isEditable}
          />
        </Grid>

        <Grid item xs={12}>
          <TextInputComponent
            inputLabel={t('PROFILE.lastName')}
            inputLabelFont={12}
            labelColor={theme.Colors.whiteGreyLight}
            variant="standard"
            disabled={isEditable}
          />
        </Grid>
        <Grid item xs={12}>
          <TextInputComponent
            inputLabel={t('PROFILE.emailAddress')}
            inputLabelFont={12}
            labelColor={theme.Colors.whiteGreyLight}
            variant="standard"
            disabled={isEditable}
          />
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={3} className={classes.buttonContainer}>
            <ButtonComp
              buttonText={'CLICK HERE TO UPLOAD IMAGE'}
              backgroundColor={theme.Colors.secondary}
              buttonFontSize={theme.MetricsSizes.small_xx}
              variant="outlined"
              buttonTextColor={theme.Colors.white}
              buttonFontWeight={theme.fontWeight.bold}
              onClickButton={onUploadFiles}
              isBrowseButton
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextInputComponent
            inputLabel={t('PROFILE.phoneNumber')}
            inputLabelFont={12}
            labelColor={theme.Colors.whiteGreyLight}
            variant="standard"
            disabled={!isText}
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
            <Grid
              style={{ marginTop: theme.MetricsSizes.tiny_xxx }}
              spacing={2}
              xs={12}
            >
              <Grid item xs={12}>
                <OtpInputCard
                  inputClassName="bottom__border"
                  OTPLength={6}
                  otpType="any"
                  disabled={false}
                  inputStyles={{
                    border: 0,
                    borderBottom: '1px solid #F68B1F'
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  style={{
                    color: theme.Colors.whiteGreyLight,
                    marginTop: theme.MetricsSizes.tiny_xxx
                  }}
                >
                  {t('PROFILE.havingTrouble')}
                  <Button
                    className={classes.buttonStyle}
                    onClick={() => console.log('Resend clicked')}
                  >
                    {t('PROFILE.resendOTP')}
                  </Button>
                </Typography>
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
            inputLabelFont={12}
            labelColor={theme.Colors.whiteGreyLight}
            variant="standard"
            disabled={!isText}
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

        <Grid xs={12} container justifyContent="center">
          <ButtonComp
            buttonText={t('PROFILE.profileButton')}
            backgroundColor={theme.Colors.whiteLightGrey}
            buttonFontSize={theme.MetricsSizes.small_xx}
            variant="outlined"
            buttonTextColor={theme.Colors.secondary}
            buttonFontWeight={theme.fontWeight.bold}
            btnWidth={'250px'}
            style={{
              marginTop: theme.MetricsSizes.medium_xx,
              justifyContent: 'center'
            }}
            startIcon={<img src={Plus} />}
            onClickButton={handleAddNewItem}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ProfileContent;
