import {
  Divider,
  Grid,
  useTheme,
  Theme,
  makeStyles,
  Typography
} from '@material-ui/core';
import ListTextItem from 'src/components/ListTextItem';
import { Image, Phone, Scales, MapPin, DateIcon } from 'src/Assets';
import { ButtonComp, DialogContentDetails, Heading } from 'src/components';
import { useTranslation } from 'react-i18next';
import { CUSTOMER_ORDER_STATUS } from 'src/Config/constant';
import { getDateFormat } from 'src/Utils';

const useStyles = makeStyles((theme: Theme) => {
  return {
    dividerStyle: {
      padding: theme.spacing(2, 0)
    },
    imgStyle: {
      borderRadius: 10
    },
    btnStyle: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      paddingTop: theme.spacing(8)
    },
    orderDetail: {
      color: theme.Colors.mediumBlack,
      marginBottom: theme.MetricsSizes.tiny,
      fontWeight: theme.fontWeight.regular
    }
  };
});

type Props = {
  orderData: any;
  onCancelButtonClick?: () => void;
};

const OrderModalComp = (props: Props) => {
  const { orderData, onCancelButtonClick } = props;
  const theme = useTheme();
  const classes = useStyles();
  const { t } = useTranslation();
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
  const isPendingOrder = orderData?.status_id === CUSTOMER_ORDER_STATUS.Pending;
  const isConfirmedOrder =
    orderData?.status_id === CUSTOMER_ORDER_STATUS.Confirmed;
  const isCompletedOrder =
    orderData?.status_id === CUSTOMER_ORDER_STATUS.Completed;

  const contentDetails = [
    { content: t('category'), value: orderData?.order_items.toString() },
    { content: t('location'), value: orderData?.city }
  ];

  const orderVendorContent = [
    { content: t('ORDER.vendorName'), value: 'vendorName' },
    { content: t('ORDER.mobileNumber'), value: 'mobile number' }
  ];

  return (
    <Grid container>
      <Grid item xs={12}>
        <DialogContentDetails
          contentDetails={contentDetails}
          leftContentFontSize={theme.MetricsSizes.regular}
          rightContentFontSize={theme.MetricsSizes.regular}
          rightContentFontWeight={theme.fontWeight.regular}
        />
      </Grid>
      <Grid item xs={12}>
        <ListTextItem icon={MapPin} value={orderData?.address} />
      </Grid>
      {isCompletedOrder && (
        <>
          <Grid item xs={12} className={classes.dividerStyle}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Heading
              headingText={'Order Completed'}
              headerFontSize={theme.MetricsSizes.regular_xxx}
              headerFontWeight={theme.fontWeight.bold}
              headingColor={theme.Colors.secondary}
            />
          </Grid>
          <Grid
            item
            xs={12}
            container
            direction="row"
            alignItems="center"
            className={classes.orderDetail}
            spacing={1}
          >
            <Grid item>
              <Typography variant="h4">
                {`Picked up - ${
                  getDateFormat(orderData?.pickup_time).getDay
                }, ${getDateFormat(orderData?.pickup_time).getDate} ${
                  getDateFormat(orderData?.pickup_time).getMonth
                }`}
              </Typography>
            </Grid>
            <Grid item style={{ display: 'grid' }}>
              <DateIcon width={18} height={18} />
            </Grid>
            <Grid item>
              <Typography variant="h4">
                {
                  timeSlotDetails.find((item) => item.value === orderData?.slot)
                    .time
                }
              </Typography>
            </Grid>
          </Grid>
        </>
      )}
      <Grid item xs={12} container>
        <Grid item xs={4}>
          <ListTextItem
            icon={Phone}
            value={orderData?.registered_mobile_number?.toString().substring(2)}
          />
        </Grid>
        <Grid item xs>
          <ListTextItem icon={Scales} value={orderData?.quantity_kg} />
        </Grid>
        <Grid item xs={12}>
          <ListTextItem
            icon={Image}
            firstImg={
              <img
                src={orderData?.order_images[0]}
                height={150}
                width={215}
                className={classes.imgStyle}
              />
            }
            secImage={
              <img
                src={orderData?.order_images[1]}
                height={150}
                width={215}
                className={classes.imgStyle}
              />
            }
          />
        </Grid>
      </Grid>
      {isPendingOrder && (
        <Grid item xs={12} className={classes.btnStyle}>
          <ButtonComp
            buttonText={t('ORDER.cancelButton')}
            backgroundColor={theme.Colors.primaryGreen}
            buttonFontSize={theme.MetricsSizes.regular}
            buttonTextColor={theme.Colors.white}
            buttonFontWeight={theme.fontWeight.medium}
            btnBorderRadius={210}
            height={theme.MetricsSizes.large_xxx}
            btnWidth={142}
            onClickButton={onCancelButtonClick}
          />
        </Grid>
      )}
      {isConfirmedOrder && (
        <>
          <Grid item xs={12} className={classes.dividerStyle}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Heading
              headingText={'Vendor Details'}
              headerFontSize={theme.MetricsSizes.regular_xxx}
              headerFontWeight={theme.fontWeight.bold}
              headingColor={theme.Colors.secondary}
            />
          </Grid>
          <Grid
            item
            xs={12}
            container
            direction="row"
            alignItems="center"
            className={classes.orderDetail}
            spacing={1}
          >
            <Grid item>
              <Typography variant="h4">
                {`Scheduled - ${
                  getDateFormat(orderData?.pickup_time).getDay
                }, ${getDateFormat(orderData?.pickup_time).getDate} ${
                  getDateFormat(orderData?.pickup_time).getMonth
                }`}
              </Typography>
            </Grid>
            <Grid item style={{ display: 'grid' }}>
              <DateIcon width={18} height={18} />
            </Grid>
            <Grid item>
              <Typography variant="h4">
                {
                  timeSlotDetails.find((item) => item.value === orderData?.slot)
                    .time
                }
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <DialogContentDetails
              contentDetails={orderVendorContent}
              leftContentFontSize={theme.MetricsSizes.small_xxx}
              rightContentFontSize={theme.MetricsSizes.small_xxx}
              leftContentFontWeight={theme.fontWeight.regular}
              rightContentFontWeight={theme.fontWeight.medium}
            />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default OrderModalComp;
