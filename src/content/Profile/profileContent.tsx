import { Grid, Typography, useTheme } from '@material-ui/core';
import React, { useState } from 'react';
import { ButtonComp, TextInputComponent } from 'src/components';
import Plus from '../../Assets/Images/Plus.svg';
import ProfileAddressModel from './profileAddressModel';
import { useTranslation } from 'react-i18next';
import OTPInput, { ResendOTP } from 'otp-input-react';

const ProfileContent = ({
  handleAddNewItem,
  handleEditListItem
}: {
  handleEditListItem: () => void;
  handleAddNewItem: () => void;
}) => {
  const [isEditable, setIsEditable] = useState<any>(true);
  const [isText, setIsText] = useState(false);
  const [OTP, setOTP] = useState('');
  const theme = useTheme();
  const { t } = useTranslation();

  const handleEdit = () => {
    setIsEditable(true);
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
        <Grid item xs={12} container justifyContent="center">
          <ButtonComp
            buttonText={isEditable ? t('PROFILE.edit') : 'SAVE'}
            backgroundColor={theme.Colors.white}
            buttonFontSize={14}
            variant="outlined"
            buttonTextColor={theme.Colors.secondary}
            buttonFontWeight={700}
            btnWidth={'100px'}
            height="30px"
            onClickButton={() => setIsEditable(false)}
          />
        </Grid>

        <Grid item xs={12}>
          <TextInputComponent
            inputLabel={t('PROFILE.phoneNumber')}
            labelColor={theme.Colors.primary}
            variant="standard"
            disabled={!isText}
            iconEnd={
              <button
                style={{ color: '#6CB044', border: 'none' }}
                onClick={() => setIsText(true)}
              >
                {!isText ? t('PROFILE.edit') : 'SAVE'}
              </button>
            }
          ></TextInputComponent>
          {isText && (
            <Grid style={{ margin: 20, padding: 10 }} spacing={2} xs={12}>
              <Grid item>
                <OTPInput
                  value={OTP}
                  onChange={setOTP}
                  autoFocus
                  OTPLength={6}
                  otpType="number"
                  disabled={true}
                  //secure
                />
                <ResendOTP
                  onResendClick={() => console.log('Resend clicked')}
                />
              </Grid>
              <Grid item>
                <Typography variant="h6">Having Trouble? Resend OTP</Typography>
              </Grid>
              <Grid
                item
                container
                style={{ display: 'flex', margin: 20, padding: 10 }}
              >
                <Grid item xs={3}>
                  <ButtonComp
                    buttonText={'Verify'}
                    //onClickButton={() => setIsText(false)}
                    btnBorderRadius={4}
                    btnWidth={167}
                    height={48}
                    buttonFontSize={16}
                  />
                </Grid>

                <Grid item style={{ marginLeft: 20 }} xs={3}>
                  <ButtonComp
                    buttonText={'Cancel'}
                    buttonTextColor={theme.Colors.secondary}
                    backgroundColor={theme.Colors.white}
                    variant="outlined"
                    onClickButton={() => setIsText(false)}
                    btnBorderRadius={4}
                    btnWidth={167}
                    height={48}
                    buttonFontSize={16}
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
              <button
                style={{ color: '#6CB044', border: 'none' }}
                onClick={handleEditListItem}
              >
                {t('PROFILE.edit')}
              </button>
            }
          />
        </Grid>

        <Grid xs={12} container justifyContent="center">
          <ButtonComp
            buttonText={t('PROFILE.profileButton')}
            backgroundColor="white"
            buttonFontSize={14}
            variant="outlined"
            buttonTextColor="#6CB044"
            buttonFontWeight={700}
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
