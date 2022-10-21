import React from 'react';
import { Dialog, Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { DialogComp, TextInputComponent } from 'src/components';
import DualActionButton from 'src/components/DualActionButton';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) => {
  return {
    dialogPaper: {
      width: 847,
      padding: theme.spacing(2, 1, 2, 5),
      borderRadius: 18
    }
  };
});

function ProfileAddressModel({
  onClose,
  open
}: {
  onClose: () => void;
  open: boolean;
}) {
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation();

  const renderDialogContent = () => {
    return (
      <Grid container justifyContent="center">
        <Grid
          container
          spacing={1}
          style={{ padding: theme.spacing(2, 5, 0, 0) }}
        >
          <Grid item xs={12}>
            <TextInputComponent
              inputLabel={t('PICKUP.houseNo')}
              labelColor={theme.Colors.primary}
              //placeholderText="address_line1"
            />
          </Grid>
          <Grid item xs={12}>
            <TextInputComponent
              inputLabel={t('PICKUP.area')}
              labelColor={theme.Colors.primary}
              //placeholderText="address_line2"
            />
          </Grid>
          <Grid item xs={12}>
            <TextInputComponent
              inputLabel={t('PICKUP.landmark')}
              //placeholderText="address_line3"
              labelColor={theme.Colors.primary}
            />
          </Grid>
          <Grid item xs={12}>
            <TextInputComponent
              inputLabel={t('PICKUP.state')}
              //placeholderText="state"
              labelColor={theme.Colors.primary}
            />
          </Grid>
          <Grid item xs={6}>
            <TextInputComponent
              inputLabel={t('PICKUP.city')}
              //placeholderText="city"
              labelColor={theme.Colors.primary}
            />
          </Grid>
          <Grid item xs={6}>
            <TextInputComponent
              inputLabel={t('PICKUP.pincode')}
              //placeholderText="pincode"
              labelColor={theme.Colors.primary}
            />
          </Grid>

          <Grid item xs={12}>
            <TextInputComponent
              inputLabel={t('PICKUP.mobileNo')}
              //placeholderText="mobile_number"
              labelColor={theme.Colors.primary}
            />
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const renderAction = () => {
    return (
      <DualActionButton
        styles={{ marginRight: 20 }}
        onLeftButtonClick={onClose}
      />
    );
  };

  return (
    <DialogComp
      maxWidth="md"
      dialogTitle={'Add New Address'}
      open={open}
      onClose={onClose}
      dialogTitleStyle={{
        //cannot apply makestyles
        fontWeight: 700,
        fontSize: theme.MetricsSizes.regular_xxx,
        color: '#333333'
      }}
      dialogTitleClasses={{ padding: theme.spacing(2, 0, 0, 3) }}
      dialogClasses={{ paper: classes.dialogPaper }}
      renderDialogContent={renderDialogContent}
      renderAction={renderAction}
    />
  );
}
export default ProfileAddressModel;
