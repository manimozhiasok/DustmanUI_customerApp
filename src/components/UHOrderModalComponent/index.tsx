import {
  Divider,
  Grid,
  useTheme,
  Theme,
  makeStyles,
  Typography
} from '@material-ui/core';
import { Image, Phone, Scales, MapPin, DateIcon } from 'src/Assets';
import {
  ButtonComp,
  DialogContentDetails,
  Heading,
  UHIconTextComp
} from 'src/components';
import { useTranslation } from 'react-i18next';
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
    },
    listStyle: {
      marginTop: theme.spacing(1.75)
    }
  };
});

type Props = {
  orderData: any;
  onCancelButtonClick?: () => void;
  cancelButtonColor?: string;
  headingColor?: string;
  isCrown?: any;
  isBlur?: any;
  isCompletedOrder?: any;
  isConfirmedOrder?: any;
  isPendingOrder?: any;
};

const UHOrderModalComponent = (props: Props) => {
  const {
    orderData,
    onCancelButtonClick,
    cancelButtonColor,
    headingColor,
    isCrown,
    isBlur,
    isPendingOrder,
    isConfirmedOrder,
    isCompletedOrder
  } = props;
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

  const contentDetails = [
    { content: t('category'), value: orderData?.order_items.toString() },
    { content: t('location'), value: orderData?.city }
  ];

  const orderVendorContent = [
    {
      content: t('ORDER.vendorName'),
      value: orderData?.vendor_name || orderData.contact_name
    },
    {
      content: t('ORDER.mobileNumber'),
      value:
        orderData?.vendor_mobile_number ||
        orderData.vendor_profile_mobile_number
    }
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
      <Grid item xs={12} className={classes.listStyle}>
        <UHIconTextComp
          isCrown={isCrown}
          isBlur={isBlur}
          icon={MapPin}
          value={orderData?.address}
        />
      </Grid>
      {isCompletedOrder && (
        <>
          <Grid item xs={12} className={classes.dividerStyle}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Heading
              headingText={t('orderCompleted')}
              headerFontSize={theme.MetricsSizes.regular_xxx}
              headerFontWeight={theme.fontWeight.bold}
              headingColor={headingColor || theme.Colors.secondary}
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
            <Grid item component="div">
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
        <Grid item xs={6} className={classes.listStyle}>
          <UHIconTextComp
            icon={Phone}
            isCrown={isCrown}
            isBlur={isBlur}
            value={orderData?.registered_mobile_number?.toString().substring(2)}
          />
        </Grid>
        {/* <Grid item xs={6} className={classes.listStyle}>                // Future Use
            <UHIconTextComp isCrown={isCrown} icon={MapTrifold} value={'location'} />
          </Grid> */}
        <Grid item xs className={classes.listStyle}>
          <UHIconTextComp icon={Scales} value={orderData?.quantity_kg} />
        </Grid>
        <Grid item xs={12} className={classes.listStyle}>
          <UHIconTextComp
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
            backgroundColor={cancelButtonColor || theme.Colors.secondary}
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
              headingText={t('vendorDetails')}
              headerFontSize={theme.MetricsSizes.regular_xxx}
              headerFontWeight={theme.fontWeight.bold}
              headingColor={headingColor || theme.Colors.secondary}
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
              leftContentFontSize={theme.MetricsSizes.small_xx}
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

export default UHOrderModalComponent;
