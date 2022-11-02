import { useEffect } from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core';
import { DialogComp } from 'src/components';
import OrderModalComp from './OrderModalComp';
import { useTranslation } from 'react-i18next';

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

const CustomerOrderDialog = (props: Props) => {
  const { onClose, orderData, onCancelButtonClick } = props;
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
      <OrderModalComp
        orderData={orderData}
        onCancelButtonClick={() => onCancelButtonClick(orderData?.order_id)}
      />
    </DialogComp>
  );
};

export default CustomerOrderDialog;
