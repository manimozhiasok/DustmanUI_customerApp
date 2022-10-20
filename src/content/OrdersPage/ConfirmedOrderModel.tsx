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

const ConfirmedOrderModal = (props: Props) => {
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
          address={t('ORDER.address')}
          number={t('ORDER.number')}
          location={t('ORDER.mapLocation')}
          quantity={t('ORDER.quantity')}
          img={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyqQttpKeNfOLaBMaxVrdFHij2HMXNDBorcg&usqp=CAU'
          }
          secImage={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_cn3Z1iNyocdOSpJ3_tCWyFQ6LZARnznMQ&usqp=CAU'
          }
          isDivider
          state={t('ORDER.scheduledState')}
          category={t('ORDER.category')}
          loc={t('ORDER.location')}
          heading={'Vendor Details'}
          day={t('ORDER.day')}
          dot={'.'}
          schedule={t('ORDER.time')}
          vendor={t('ORDER.vendorDetail')}
          mobile={t('ORDER.vendorMobileNo')}
          dateImage={Date}
          bottomContent
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

export default ConfirmedOrderModal;
