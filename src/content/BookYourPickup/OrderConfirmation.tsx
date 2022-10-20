import {
  Grid,
  makeStyles,
  Theme,
  Typography,
  useTheme
} from '@material-ui/core';
import { ButtonComp, DialogContentDetails } from 'src/components';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

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
      content: t('PICKUP.slot'),
      value: `${edit.getValue('customer_order_details').pickup_time}, ${
        edit.getValue('customer_order_details').slot
      }`
    },
    {
      content: t('PICKUP.userName'),
      value: edit.getValue('name')
    },
    { content: t('category'), value: getTrashValue() },

    {
      content: t('address'),
      value: `${edit.getValue('order_address').address_line1}, ${
        edit.getValue('order_address').address_line2
      }, ${edit.getValue('order_address').city}, ${
        edit.getValue('order_address').state
      }`
    },
    { content: t('PICKUP.mobile'), value: edit.getValue('order_address').mobile_number }
  ];

  return (
    <Grid container direction="row">
      <DialogContentDetails contentDetails={rightContent} />
      <Grid container className={classes.outerContainer}>
        <Grid item xs={12}>
          <Typography variant="h5" className={classes.title}>
            {t('PICKUP.goodToSee')}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.subtitle}>
          {t('PICKUP.notified')}
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
          buttonText={t('PICKUP.confirm')}
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
