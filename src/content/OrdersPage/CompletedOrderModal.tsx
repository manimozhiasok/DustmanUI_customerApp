import { useEffect } from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core';
import { DialogComp } from 'src/components';
import { Date } from 'src/Assets';
import OrderModalComp from './OrderModalComp';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  useEffect(() => {
    //api call to get data
  }, []);

  const renderDialogContent = () => {
    return (
      <>
        <OrderModalComp
          address={
             t('ORDER.address')
          }
          number={t('ORDER.number')}
          orderHeading={t('ORDER.heading')}
          location={t('ORDER.mapLocation')}
          quantity={t('ORDER.quantity')}
          img={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyqQttpKeNfOLaBMaxVrdFHij2HMXNDBorcg&usqp=CAU'
          }
          secImage={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_cn3Z1iNyocdOSpJ3_tCWyFQ6LZARnznMQ&usqp=CAU'
          }
          dividerLine
          category={t('ORDER.category')}
          loc={t('ORDER.location')}
          orderState={t('ORDER.state')}
          orderDateImage={Date}
          orderDay={t('ORDER.day')}
          orderDot={'.'}
          pickupSchedule={t('ORDER.time')}
          orderSchedule
        />
      </>
    );
  };

  return (
    <DialogComp
      dialogTitle={t('ORDER.completedDialogTitle')}
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
