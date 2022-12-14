import React, { useState } from 'react';
import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { DialogComp, TextInputComponent } from 'src/components';
import { useTranslation } from 'react-i18next';
import DualActionButton from 'src/components/DualActionButton';
import { useEdit } from 'src/hooks/useEdit';
import toast from 'react-hot-toast';
import { isPhoneNumber, isValidPinCode } from 'src/Utils';
import { AddressData } from 'src/Services/customerAddressService';

const useStyles = makeStyles((theme: Theme) => {
  return {
    dialogPaper: {
      width: 683,
      height: 500,
      padding: theme.spacing(2, 2, 1, 1),
      borderRadius: theme.MetricsSizes.regular
    }
  };
});

type Props = {
  onClose: () => void;
  handleSaveButtonClick: (
    data: AddressData,
    modalCloseCallback: () => void
  ) => void;
  modalTitle?: string;
};

const UHAddressModalComp = ({
  onClose,
  handleSaveButtonClick,
  modalTitle
}: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation();
  const [isError, setIsError] = useState(false);
  const initialAddressValues: AddressData = {
    address_line1: '',
    address_line2: '',
    address_line3: '',
    state: '',
    city: '',
    pincode: '',
    mobile_number: ''
  };
  const edit = useEdit(initialAddressValues);
  const RequiredFields = [
    'address_line1',
    'address_line2',
    'address_line3',
    'state',
    'city',
    'pincode',
    'mobile_number'
  ];

  const handleOnSaveClick = async () => {
    if (!edit.allFilled(...RequiredFields)) {
      return toast.error('Please Fill all the address details');
    } else if (
      !isPhoneNumber(edit.getValue('mobile_number')) ||
      !isValidPinCode(edit.getValue('pincode'))
    ) {
      setIsError(true);
      return;
    }
    let data = { ...initialAddressValues, ...edit.edits };
    handleSaveButtonClick(data, onClose);
  };

  const renderAction = () => {
    return (
      <DualActionButton
        onLeftButtonClick={onClose}
        onRightButtonClick={handleOnSaveClick}
      />
    );
  };

  return (
    <DialogComp
      open={true}
      dialogTitle={modalTitle || 'Pickup Address'}
      dialogClasses={{ paper: classes.dialogPaper }}
      onClose={onClose}
      renderAction={renderAction}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextInputComponent
            placeholderText={t('PICKUP.houseNo')}
            textColor={theme.Colors.lightBlack}
            value={edit.getValue('address_line1')}
            onChange={(e) =>
              edit.update({
                address_line1: e.target.value
              })
            }
            inputHeight={theme.MetricsSizes.xl_large}
          />
        </Grid>
        <Grid item xs={12}>
          <TextInputComponent
            placeholderText={t('PICKUP.area')}
            textColor={theme.Colors.lightBlack}
            value={edit.getValue('address_line2')}
            onChange={(e) =>
              edit.update({
                address_line2: e.target.value
              })
            }
            inputHeight={theme.MetricsSizes.xl_large}
          />
        </Grid>
        <Grid item xs={12}>
          <TextInputComponent
            placeholderText={t('PICKUP.state')}
            value={edit.getValue('state')}
            onChange={(e) =>
              edit.update({
                state: e.target.value
              })
            }
            textColor={theme.Colors.lightBlack}
            inputHeight={theme.MetricsSizes.xl_large}
          />
        </Grid>
        <Grid item xs={6}>
          <TextInputComponent
            placeholderText={t('PICKUP.city')}
            value={edit.getValue('city')}
            onChange={(e) =>
              edit.update({
                city: e.target.value
              })
            }
            textColor={theme.Colors.lightBlack}
            inputHeight={theme.MetricsSizes.xl_large}
          />
        </Grid>
        <Grid item xs={6}>
          <TextInputComponent
            placeholderText={t('PICKUP.pincode')}
            value={edit.getValue('pincode')}
            textColor={theme.Colors.lightBlack}
            inputHeight={theme.MetricsSizes.xl_large}
            onChange={(e) =>
              edit.update({
                pincode: e.target.value
              })
            }
            helperText={
              ((isError && !edit.getValue('pincode')) ||
                (isError &&
                  edit.getValue('pincode') &&
                  !isValidPinCode(edit.getValue('pincode')))) &&
              'Please enter your valid pincode'
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextInputComponent
            placeholderText={t('PICKUP.landmark')}
            value={edit.getValue('address_line3')}
            textColor={theme.Colors.lightBlack}
            inputHeight={theme.MetricsSizes.xl_large}
            onChange={(e) =>
              edit.update({
                address_line3: e.target.value
              })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextInputComponent
            placeholderText={t('PICKUP.mobileNo')}
            value={edit.getValue('mobile_number')}
            onChange={(e) =>
              edit.update({
                mobile_number: e.target.value
              })
            }
            textColor={theme.Colors.lightBlack}
            inputHeight={theme.MetricsSizes.xl_large}
            helperText={
              ((isError && !edit.getValue('mobile_number')) ||
                (isError &&
                  edit.getValue('mobile_number') &&
                  !isPhoneNumber(edit.getValue('mobile_number')))) &&
              'Please enter your valid 10 digit mobile number'
            }
          />
        </Grid>
      </Grid>
    </DialogComp>
  );
};

export default UHAddressModalComp;
