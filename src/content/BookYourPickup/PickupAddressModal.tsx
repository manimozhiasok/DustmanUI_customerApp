import React from 'react';
import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { ButtonComp, DialogComp, TextInputComponent } from 'src/components';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) => {
  return {
    dialogPaper: {
      width: 683,
      height: 676,
      padding: theme.spacing(2, 2, 1, 1),
      borderRadius: theme.MetricsSizes.regular
    },
    mainContainer: {
      paddingBottom: theme.spacing(5)
    }
  };
});

function PickupAddressModal({
  edit,
  onClose
}: {
  edit: any;
  onClose: () => void;
}) {
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation();

  const renderDialogContent = () => {
    return (
      <Grid container spacing={2} className={classes.mainContainer}>
        <Grid item xs={12}>
          <TextInputComponent
            placeholderText={t('PICKUP.houseNo')}
            textColor={theme.Colors.lightBlack}
            value={edit.getValue('order_address').address_line1}
            onChange={(e) =>
              edit.update({
                order_address: {
                  ...edit.edits.order_address,
                  address_line1: e.target.value
                }
              })
            }
            inputHeight={theme.MetricsSizes.xl_large}
          />
        </Grid>
        <Grid item xs={12}>
          <TextInputComponent
            placeholderText={t('PICKUP.area')}
            textColor={theme.Colors.lightBlack}
            value={edit.getValue('order_address').address_line2}
            onChange={(e) =>
              edit.update({
                order_address: {
                  ...edit.edits.order_address,
                  address_line2: e.target.value
                }
              })
            }
            inputHeight={theme.MetricsSizes.xl_large}
          />
        </Grid>
        <Grid item xs={12}>
          <TextInputComponent
            placeholderText={t('PICKUP.state')}
            value={edit.getValue('order_address').state}
            onChange={(e) =>
              edit.update({
                order_address: {
                  ...edit.edits.order_address,
                  state: e.target.value
                }
              })
            }
            textColor={theme.Colors.lightBlack}
            inputHeight={theme.MetricsSizes.xl_large}
          />
        </Grid>
        <Grid item xs={6}>
          <TextInputComponent
            placeholderText={t('PICKUP.city')}
            value={edit.getValue('order_address').city}
            onChange={(e) =>
              edit.update({
                order_address: {
                  ...edit.edits.order_address,
                  city: e.target.value
                }
              })
            }
            textColor={theme.Colors.lightBlack}
            inputHeight={theme.MetricsSizes.xl_large}
          />
        </Grid>
        <Grid item xs={6}>
          <TextInputComponent
            placeholderText={t('PICKUP.pincode')}
            value={edit.getValue('order_address').pincode}
            textColor={theme.Colors.lightBlack}
            inputHeight={theme.MetricsSizes.xl_large}
            onChange={(e) =>
              edit.update({
                order_address: {
                  ...edit.edits.order_address,
                  pincode: e.target.value
                }
              })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextInputComponent
            placeholderText={t('PICKUP.landmark')}
            value={edit.getValue('order_address').address_line3}
            textColor={theme.Colors.lightBlack}
            inputHeight={theme.MetricsSizes.xl_large}
            onChange={(e) =>
              edit.update({
                order_address: {
                  ...edit.edits.order_address,
                  address_line3: e.target.value
                }
              })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextInputComponent
            placeholderText={t('PICKUP.mobileNo')}
            value={edit.getValue('order_address').mobile_number}
            onChange={(e) =>
              edit.update({
                order_address: {
                  ...edit.edits.order_address,
                  mobile_number: e.target.value
                }
              })
            }
            textColor={theme.Colors.lightBlack}
            inputHeight={theme.MetricsSizes.xl_large}
          />
        </Grid>
      </Grid>
    );
  };

  const renderAction = () => {
    return (
      <ButtonComp
        buttonText="save"
        btnWidth={'50px'}
        backgroundColor={'transparent'}
        buttonTextColor={theme.Colors.primary}
        buttonFontWeight={theme.fontWeight.bold}
      />
    );
  };

  return (
    <DialogComp
      open={true}
      dialogTitle={'Pickup Address'}
      dialogClasses={{ paper: classes.dialogPaper }}
      dialogTitleStyle={{
        fontWeight: theme.fontWeight.bold,
        fontSize: theme.MetricsSizes.regular_xxx,
        color: theme.Colors.blueDark,
        paddingLeft: theme.spacing(0.5)
      }}
      onClose={onClose}
      renderDialogContent={() => renderDialogContent()}
      renderAction={() => renderAction()}
    />
  );
}

export default PickupAddressModal;