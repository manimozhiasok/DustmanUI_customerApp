import { useEffect } from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core';
import { DialogComp } from 'src/components';
import { Date } from 'src/Assets';
import OrderModalComp from './OrderModalComp';

const useStyles = makeStyles((theme: Theme) => {
  return {
    dialogPaper: {
      width: 683,
      height: 676,
      padding: theme.spacing(2, 2, 1, 1),
      borderRadius: theme.MetricsSizes.regular
    }
  };
});

type Props = {
  onClose: () => void;
};

const CompletedOrderModal = (props: Props) => {
  const { onClose } = props;
  const theme = useTheme();
  const classes = useStyles();

  useEffect(() => {
    //api call to get data
  }, []);

  const renderDialogContent = () => {
    return (
      <>
        <OrderModalComp
          address={
            'New No: 42, 4th cross street, Ram Nagar, Velachery, Chennai 600042.'
          }
          number={9840046988}
          orderHeading={'Order Completed'}
          location={'Map Location'}
          quantity={'25 kgs'}
          img={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyqQttpKeNfOLaBMaxVrdFHij2HMXNDBorcg&usqp=CAU'
          }
          secImage={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_cn3Z1iNyocdOSpJ3_tCWyFQ6LZARnznMQ&usqp=CAU'
          }
          dividerLine
          category={'Aluminum, News Paper... '}
          loc={'Velachery'}
          orderState={'Picked up-'}
          orderDateImage={Date}
          orderDay={'Mon, 01 Jan'}
          orderDot={'.'}
          pickupSchedule={'9:00 AM - 12:00 PM'}
          orderSchedule
        />
      </>
    );
  };

  return (
    <DialogComp
      dialogTitle={'Order 375867'}
      open={true}
      onClose={onClose}
      dialogClasses={{ paper: classes.dialogPaper }}
      dialogTitleStyle={{
        fontWeight: theme.fontWeight.bold,
        fontSize: theme.MetricsSizes.regular_xxx,
        color: theme.Colors.blueDark,
        paddingLeft: theme.spacing(0.5)
      }}
      dialogTitleClasses={{ padding: theme.spacing(2, 0, 0, 3) }}
      renderDialogContent={() => renderDialogContent()}
    />
  );
};

export default CompletedOrderModal;
