import { useEffect } from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core';
import { DialogComp } from 'src/components';
import { Paper, Iron, Date } from 'src/Assets';
import OrderModalComp from './OrderModalComp';

const useStyles = makeStyles((theme: Theme) => {
  return {
    dialogPaper: {
      width: 847,
      height: 555,
      padding: theme.spacing(2, 2, 2, 5),
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
          image={Paper}
          img={Iron}
          dividerLine
          category={'category'}
          loc={'Location'}
          orderState={'Picked up-'}
          orderDateImage={Date}
          orderDay={'Mon, 01 Jan .'}
          pickupSchedule={'9:00AM - 12:00PM'}
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
        color: theme.Colors.blueDark
      }}
      renderDialogContent={() => renderDialogContent()}
    />
  );
};

export default CompletedOrderModal;
