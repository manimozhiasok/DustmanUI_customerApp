import {
  Grid,
  makeStyles,
  Theme,
  Typography,
  useTheme
} from '@material-ui/core';
import { ButtonComp, DialogContentDetails } from 'src/components';

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontFamily: 'Source Serif Pro',
    fontWeight: theme.fontWeight.bold,
    color: theme.Colors.darkBlue
  },
  subtitle: {
    paddingTop: theme.spacing(1),
    fontWeight: theme.fontWeight.regular,
    fontSize: theme.MetricsSizes.tiny_xxx,
    color: theme.Colors.mediumBlack
  },
  outerContainer: {
    paddingTop: theme.spacing(6),
    textAlign: 'center'
  },
  buttonContainer: {
    padding: theme.spacing(4, 26)
  }
}));

function OrderConfirmation({ edit, handleButtonClick, trashData }) {
  const classes = useStyles();
  const theme = useTheme();

  const getTrashValue = () => {
    const data =
      edit.getValue('order_items').length &&
      edit.getValue('order_items').map((element) => {
        return (
          trashData.length &&
          trashData.filter((list) => list.id === element)[0].name
        );
      });
    return data.length ? data.toString() : '';
  };

  const rightContent = [
    {
      content: 'Slot',
      value: `${edit.getValue('customer_order_details').pickup_time}, ${
        edit.getValue('customer_order_details').slot
      }`
    },
    {
      content: 'User Name',
      value: edit.getValue('name')
    },
    { content: 'Category', value: getTrashValue() },

    {
      content: 'Address',
      value: `${edit.getValue('order_address').address_line1}, ${
        edit.getValue('order_address').address_line2
      }, ${edit.getValue('order_address').city}, ${
        edit.getValue('order_address').state
      }`
    },
    { content: 'Mobile', value: edit.getValue('order_address').mobile_number }
  ];

  return (
    <Grid container direction="row">
      <DialogContentDetails contentDetails={rightContent} />
      <Grid container className={classes.outerContainer}>
        <Grid item xs={12}>
          <Typography variant="h5" className={classes.title}>
            Yay! Good to see you here
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.subtitle}>
            You will be notified when your order confirms
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        item
        xs={12}
        className={classes.buttonContainer}
      >
        <ButtonComp
          btnBorderRadius={theme.MetricsSizes.large_xx}
          buttonText={'Confirm Order'}
          buttonFontSize={theme.MetricsSizes.small_xxx}
          btnWidth={342}
          height={theme.MetricsSizes.large_xxx}
          buttonFontWeight={theme.fontWeight.medium}
          onClickButton={handleButtonClick}
        />
      </Grid>
    </Grid>
  );
}

export default OrderConfirmation;
