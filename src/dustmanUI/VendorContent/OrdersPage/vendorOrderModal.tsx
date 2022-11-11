import React from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core';
import { DialogComp, UHOrderModalComponent } from 'src/components';
import { useTranslation } from 'react-i18next';
import { CUSTOMER_ORDER_STATUS } from 'src/Config/constant';

const useStyles = makeStyles((theme: Theme) => {
  return {
    dialogPaper: {
      width: 683,
      minHeight: 550,
      padding: theme.spacing(4, 2, 5, 2),
      borderRadius: theme.MetricsSizes.regular
    },
    dialogTitleRoot: {
      padding: theme.spacing(0, 2.8)
    }
  };
});

type Props = {
  onClose: () => void;
  orderData: any;
  onCancelButtonClick?: (orderId: number) => void;
};

const VendorOrderModal = (props: Props) => {
  const { onClose, orderData, onCancelButtonClick } = props;
  const theme = useTheme();
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <DialogComp
      dialogTitle={`Order ${orderData?.id}`}
      open={true}
      onClose={onClose}
      dialogClasses={{ paper: classes.dialogPaper }}
      dialogTitleClasses={{ root: classes.dialogTitleRoot }}
      chipText={orderData?.user_type}
    >
      <UHOrderModalComponent
        orderData={orderData}
        onCancelButtonClick={() => onCancelButtonClick(orderData?.order_id)}
        isConfirmedOrder={
          orderData?.status_id === CUSTOMER_ORDER_STATUS.Confirmed &&
          orderData?.user_type === 'Pickup'
        }
        isPendingOrder={
          orderData?.status_id !== CUSTOMER_ORDER_STATUS.Confirmed ||
          orderData?.user_type !== 'Pickup'
        }
        cancelButtonColor={theme.Colors.orangePrimary}
      />
    </DialogComp>
  );
};

export default VendorOrderModal;
