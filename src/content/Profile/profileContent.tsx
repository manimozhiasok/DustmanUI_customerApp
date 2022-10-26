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
const useStyles = makeStyles((theme: Theme) => ({
  buttonStyle: {
    color: theme.Colors.secondary,
    border: 'none',
    fontWeight: theme.fontWeight.bold,
    fontSize: theme.MetricsSizes.small_xx,
    fontFamily: 'DM Sans'
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

  return (
    <Grid container justifyContent="center">
      <Grid
        container
        spacing={2}
        style={{ padding: theme.spacing(0, 0, 0, 0) }}
      >
        <Grid item xs={12}>
          <TextInputComponent
            inputLabel={t('PROFILE.firstName')}
            labelColor={theme.Colors.primary}
            variant="standard"
            disabled={isEditable}
          />
        </Grid>

        <Grid item xs={12}>
          <TextInputComponent
            inputLabel={t('PROFILE.lastName')}
            labelColor={theme.Colors.primary}
            variant="standard"
            disabled={isEditable}
          />
        </Grid>
        <Grid item xs={12}>
          <TextInputComponent
            inputLabel={t('PROFILE.emailAddress')}
            labelColor={theme.Colors.primary}
            variant="standard"
            disabled={isEditable}
          />
        </Grid>
        <Grid
          item
          xs={12}
          style={{ display: 'flex', flexDirection: 'row-reverse' }}
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
            onClickButton={() => setIsEditable(false)}
            style={{ border: 'none' }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextInputComponent
            inputLabel={t('PROFILE.phoneNumber')}
            labelColor={theme.Colors.primary}
            variant="standard"
            disabled={!isText}
            iconEnd={
              <Button
                className={classes.buttonStyle}
                onClick={() => setIsText(true)}
              >
                {!isText ? t('PROFILE.edit') : 'SAVE'}
              </Button>
            }
          ></TextInputComponent>
          {isText && (
            <Grid style={{ marginTop: 10 }} spacing={2} xs={12}>
              <Grid item xs={12}>
                <OtpInputCard
                  inputClassName="bottom__border"
                  // autoFocus
                  OTPLength={6}
                  otpType="any"
                  disabled={false}
                  inputStyles={{
                    border: 0,
                    borderBottom: '1px solid #cbcbcb'
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" style={{ marginTop: 10 }}>
                  Having Trouble?{' '}
                  <span
                    style={{ color: theme.Colors.secondary }}
                    onClick={() => console.log('Resend clicked')}
                  >
                    Resend OTP
                  </span>
                </Typography>
              </Grid>
              <Grid item container style={{ display: 'flex', marginTop: 15 }}>
                <Grid item xs={3}>
                  <ButtonComp
                    buttonText={'Verify'}
                    //onClickButton={() => setIsText(false)}
                    btnBorderRadius={4}
                    btnWidth={'167px'}
                    height={'48px'}
                    buttonFontSize={theme.MetricsSizes.small_xxx}
                  />
                </Grid>

                <Grid item xs={3}>
                  <ButtonComp
                    buttonText={'Cancel'}
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
            labelColor={theme.Colors.primary}
            variant="standard"
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
            backgroundColor="white"
            buttonFontSize={theme.MetricsSizes.small_xx}
            variant="outlined"
            buttonTextColor={theme.Colors.secondary}
            buttonFontWeight={theme.fontWeight.bold}
            btnWidth={'250px'}
            style={{
              marginTop: 30,
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
