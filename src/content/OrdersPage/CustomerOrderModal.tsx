import { useEffect } from 'react';
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
  orderData?: any;
  onCancelButtonClick?: (orderId: number) => void;
};

const CustomerOrderModal = (props: Props) => {
  const { onClose, orderData, onCancelButtonClick } = props;
  const theme = useTheme();
  const classes = useStyles();
  const { t } = useTranslation();

  const isPendingOrder = (orderData?.status_id === CUSTOMER_ORDER_STATUS.New ||

    orderData?.status_id === CUSTOMER_ORDER_STATUS.Pending);
    const isConfirmedOrder =
      orderData?.status_id === CUSTOMER_ORDER_STATUS.Confirmed;
    const isCompletedOrder =
      orderData?.status_id === CUSTOMER_ORDER_STATUS.Completed;
  
  return (
    <DialogComp
      dialogTitle={`Order ${orderData?.order_id} `}
      open={true}
      onClose={onClose}
      dialogClasses={{ paper: classes.dialogPaper }}
      dialogTitleClasses={{ root: classes.dialogTitleRoot }}
    >
      <UHOrderModalComponent
        orderData={orderData}
        onCancelButtonClick={() => onCancelButtonClick(orderData?.order_id)}
        isPendingOrder={isPendingOrder}
        isConfirmedOrder={isConfirmedOrder}
        isCompletedOrder={isCompletedOrder}
      />
    </DialogComp>
  );
};

export default CustomerOrderModal;
