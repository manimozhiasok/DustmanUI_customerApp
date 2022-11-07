import {
  Grid,
  makeStyles,
  Theme,
  Typography,
  useTheme
} from '@material-ui/core';
import { ButtonComp, DialogContentDetails } from 'src/components';
import { useTranslation } from 'react-i18next';
import useVendorInfo from 'src/hooks/useVendorInfo';
import { getDateFormat } from 'src/Utils';

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

function DropOrderConfirmation({ edit, handleButtonClick, trashData }) {
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation();
  const { vendorAddressDetails, vendorDetails } = useVendorInfo();
  const timeSlotDetails = [
    {
      id: 1,
      text: t('PICKUP.morning'),
      time: '9:00 AM  - 12:00 PM',
      value: 'morning'
    },
    {
      id: 2,
      text: t('PICKUP.noon'),
      time: '1:00 PM  - 4:00 PM',
      value: 'afternoon'
    },
    {
      id: 3,
      text: t('PICKUP.evening'),
      time: '4:00 PM  - 7:00 PM',
      value: 'evening'
    }
  ];

  const getTrashValue = () => {
    const data =
      edit.getValue('order_items').length &&
      edit.getValue('order_items').map((element) => {
        return (
          trashData.length &&
          trashData.filter((list: { id: any }) => list.id === element)[0].name
        );
      });
    return data.length ? data.toString() : '';
  };

  const getAddressData =
    (edit.getValue('vendor_order_drop_details')?.dustman_location_id &&
      vendorAddressDetails?.length &&
      vendorAddressDetails.filter(
        (item) =>
          item.id ===
          edit.getValue('vendor_order_drop_details')?.dustman_location_id
      )) ||
    [];

  const getSlotValues = () => {
    if (
      edit.getValue('vendor_order_drop_details')?.pickup_time &&
      edit.getValue('vendor_order_drop_details')?.slot
    ) {
      let data = `${
        getDateFormat(edit.getValue('vendor_order_drop_details').pickup_time)
          .getDay
      }, ${
        getDateFormat(edit.getValue('vendor_order_drop_details').pickup_time)
          .getDate
      } ${
        getDateFormat(edit.getValue('vendor_order_drop_details').pickup_time)
          .getMonth
      } ${
        timeSlotDetails.find(
          (item) =>
            item.value === edit.getValue('vendor_order_drop_details')?.slot
        ).time
      }`;
      return data;
    }
  };

  const rightContent = [
    {
      content: t('PICKUP.slot'),
      value: getSlotValues()
    },
    {
      content: t('PICKUP.userName'),
      value: vendorDetails?.name
    },
    { content: t('category'), value: getTrashValue() },

    {
      content: t('address'),
      value: getAddressData[0]?.address ?? ''
    },
    {
      content: t('PICKUP.mobile'),
      value: getAddressData[0]?.mobile_number ?? ''
    }
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
          backgroundColor={theme.Colors.orangePrimary}
        />
      </Grid>
    </Grid>
  );
}

export default DropOrderConfirmation;
