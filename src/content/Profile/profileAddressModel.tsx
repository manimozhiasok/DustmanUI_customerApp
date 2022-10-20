import React from 'react';
import { Dialog, Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { DialogComp, TextInputComponent } from 'src/components';
import DualActionButton from 'src/components/DualActionButton';

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
              inputLabel={'Address Line1'}
              labelColor={theme.Colors.primary}
              placeholderText="address_line1"
            />
          </Grid>
          <Grid item xs={12}>
            <TextInputComponent
              inputLabel={'Address Line2'}
              labelColor={theme.Colors.primary}
              placeholderText="address_line2"
            />
          </Grid>
          <Grid item xs={12}>
            <TextInputComponent
              inputLabel={'Address Line3'}
              placeholderText="address_line3"
              labelColor={theme.Colors.primary}
            />
          </Grid>
          <Grid item xs={12}>
            <TextInputComponent
              inputLabel={'State'}
              placeholderText="state"
              labelColor={theme.Colors.primary}
            />
          </Grid>
          <Grid item xs={6}>
            <TextInputComponent
              inputLabel={'City'}
              placeholderText="city"
              labelColor={theme.Colors.primary}
            />
          </Grid>
          <Grid item xs={6}>
            <TextInputComponent
              inputLabel={'Pincode'}
              placeholderText="pincode"
              labelColor={theme.Colors.primary}
            />
          </Grid>

          <Grid item xs={12}>
            <TextInputComponent
              inputLabel={'Mobile Number'}
              placeholderText="mobile_number"
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
