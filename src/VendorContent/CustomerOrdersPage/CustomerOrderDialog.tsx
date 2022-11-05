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
  orderData: any;
  onCancelButtonClick?: (orderId: number) => void;
  selectedTab: number;
};

const CustomerOrderDialog = (props: Props) => {
  const { onClose, orderData, onCancelButtonClick, selectedTab } = props;
  const theme = useTheme();
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <DialogComp
      dialogTitle={`Order ${orderData?.order_id}`}
      open={true}
      onClose={onClose}
      dialogClasses={{ paper: classes.dialogPaper }}
      dialogTitleClasses={{ root: classes.dialogTitleRoot }}
    >
      <UHOrderModalComponent
        orderData={orderData}
        onCancelButtonClick={() => onCancelButtonClick(orderData?.order_id)}
        isBlur={orderData?.status_id === CUSTOMER_ORDER_STATUS.New}
        isCrown={orderData?.status_id === CUSTOMER_ORDER_STATUS.New}
        isPendingOrder={orderData?.status_id !== CUSTOMER_ORDER_STATUS.Completed}
        cancelButtonColor={theme.Colors.orangePrimary}
      />
    </DialogComp>
  );
};

export default CustomerOrderDialog;
