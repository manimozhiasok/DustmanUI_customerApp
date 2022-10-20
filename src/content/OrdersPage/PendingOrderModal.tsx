import { useEffect } from 'react';
import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { ButtonComp, DialogComp } from 'src/components';
import OrderModalComp from './OrderModalComp';

const useStyles = makeStyles((theme: Theme) => {
  return {
    dialogPaper: {
      width: 683,
      height: 643,
      padding: theme.spacing(2, 2, 0, 1),
      borderRadius: theme.MetricsSizes.regular
    },
    btnStyle: {
      padding: theme.spacing(4, 0, 0, 0)
    }
  };
});

type Props = {
  onClose: () => void;
};

const PendingModal = (props: Props) => {
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
          location={'Map Location'}
          quantity={'25 kgs'}
          img={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyqQttpKeNfOLaBMaxVrdFHij2HMXNDBorcg&usqp=CAU'
          }
          secImage={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_cn3Z1iNyocdOSpJ3_tCWyFQ6LZARnznMQ&usqp=CAU'
          }
          category={'Aluminum, News Paper... '}
          loc={'Velachery'}
        />
        <Grid container justifyContent="center" className={classes.btnStyle}>
          <ButtonComp
            buttonText={'CANCEL'}
            backgroundColor="#6BB043"
            buttonFontSize={theme.MetricsSizes.regular}
            buttonTextColor="#FFFFFF"
            buttonFontWeight={theme.fontWeight.medium}
            btnBorderRadius={209.338}
            height={48}
            btnWidth={142}
            onClickButton={onClose}
          />
        </Grid>
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

export default PendingModal;
