import { useEffect } from 'react';
import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { ButtonComp, DialogComp } from 'src/components';
import { Paper, Iron } from 'src/Assets';
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
          image={Paper}
          img={Iron}
          category={'Category'}
          loc={'Location'}
        />
        <Grid container justifyContent="center">
          <ButtonComp
            buttonText={'Cancel'}
            backgroundColor="#6BB043"
            buttonFontSize={theme.MetricsSizes.regular}
            buttonTextColor="#FFFFFF"
            buttonFontWeight={theme.fontWeight.medium}
            btnBorderRadius={209.338}
            height={48}
            btnWidth={142}
            style={{ marginRight: 10 }}
            // onClickButton={onClick}
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
        color: theme.Colors.blueDark
      }}
      renderDialogContent={() => renderDialogContent()}
    />
  );
};

export default PendingModal;
