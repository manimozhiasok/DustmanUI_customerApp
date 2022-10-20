import { Grid, Typography, useTheme } from '@material-ui/core';
import React, { useState } from 'react';
import { ButtonComp, TextInputComponent } from 'src/components';
import Plus from '../../Assets/Images/Plus.svg';
import ProfileAddressModel from './profileAddressModel';
import { useTranslation } from 'react-i18next';

const ProfileContent = ({
  handleAddNewItem,
  handleEditListItem
}: {
  handleEditListItem: () => void;
  handleAddNewItem: () => void;
}) => {
  const [isEditable, setIsEditable] = useState<any>(true);
  const theme = useTheme();
  const { t } = useTranslation();

  const handleEdit = () => {
    setIsEditable(false);
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
            buttonText={t('PROFILE.edit')}
            backgroundColor="white"
            buttonFontSize={14}
            variant="outlined"
            buttonTextColor="#6CB044"
            buttonFontWeight={700}
            btnWidth={'100px'}
            height="30px"
            onClickButton={handleEdit}
          />
        </Grid>

        <Grid item xs={12}>
          <TextInputComponent
            inputLabel={t('PROFILE.phoneNumber')}
            labelColor={theme.Colors.primary}
            variant="standard"
            iconEnd={
              <button style={{ color: '#6CB044', border: 'none' }}>EDIT</button>
            }
          ></TextInputComponent>
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
                EDIT
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
