import { Divider, Grid, useTheme, Theme, makeStyles } from '@material-ui/core';
import ListTextItem from 'src/components/ListTextItem';
import { Image, Phone, Scales, MapPin, MapTrifold } from 'src/Assets';
import { DialogContentDetails, Heading } from 'src/components';
import OrderScheduleComp from '../OrderScheduleComp';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) => {
  return {
    divider: {
      margin: `5px 0 0 ${theme.spacing(0)}px`
    },
    isDivider: {
      padding: theme.spacing(1, 0),
      margin: `5px 0 0 ${theme.spacing(0.5)}px`
    },
    imgStyle: {
      borderRadius: 9.41344
    },
    completedStyle: {
      padding: theme.spacing(0, 0, 0, 1)
    }
  };
});

type Props = {
  isDivider?: boolean;
  address: string;
  number: number;
  location: string;
  quantity: string;
  heading?: string;
  img?: string;
  orderDetails?: string;
  category?: string;
  loc?: string;
  headingText?: string;
  schedule?: string;
  time?: string;
  day?: string;
  bottomContent?: boolean;
  vendor?: string;
  mobile?: string | number;
  dividerLine?: boolean;
  orderHeading?: string;
  orderSchedule?: boolean;
  orderDay?: string;
  state?: string;
  dateImage?: string;
  orderState?: string;
  orderDateImage?: string;
  pickupSchedule?: string;
  secImage?: string;
  orderDot?: string;
  dot?: string;
};

const OrderModalComp = (props: Props) => {
  const {
    isDivider,
    heading,
    address,
    number,
    location,
    quantity,
    img,
    secImage,
    category,
    loc,
    schedule,
    day,
    bottomContent,
    vendor,
    mobile,
    dividerLine,
    orderHeading,
    orderSchedule,
    state,
    orderState,
    dateImage,
    orderDay,
    orderDateImage,
    pickupSchedule,
    orderDot,
    dot
  } = props;
  const theme = useTheme();
  const classes = useStyles();
  const { t } = useTranslation();

  const rightContent = [
    { content: t('category'), value: category },
    { content: t('location'), value: loc }
  ];

  const orderVendorContent = [
    { content: t('ORDER.vendorName'), value: vendor },
    { content: t('ORDER.mobileNumber'), value: mobile }
  ];

  const scheduleDetails = [
    {
      state: orderState,
      day: orderDay,
      dot: orderDot,
      dateImage: <img src={orderDateImage} />,
      schedule: pickupSchedule
    }
  ];

  const scheduled = [
    {
      state: state,
      day: day,
      dot: dot,
      dateImage: <img src={dateImage} />,
      schedule: schedule
    }
  ];
  return (
    <Grid container>
      <DialogContentDetails
        contentDetails={rightContent}
        leftContentFontSize={theme.MetricsSizes.regular}
        rightContentFontSize={theme.MetricsSizes.regular}
        rightContentFontWeight={theme.fontWeight.regular}
      />
      <Grid item xs={10}>
        <ListTextItem image={MapPin} value={address} />
      </Grid>
      <Grid item xs={12} className={classes.isDivider}>
        {dividerLine && <Divider />}
      </Grid>
      <Grid item xs={12} className={classes.completedStyle}>
        {orderHeading && (
          <Heading
            headingText={orderHeading}
            headerFontSize={theme.MetricsSizes.regular_xxx}
            headerFontWeight={theme.fontWeight.bold}
            headingColor={theme.Colors.secondary}
          />
        )}
        {orderSchedule && (
          <OrderScheduleComp scheduleDetails={scheduleDetails} />
        )}
        <Grid container direction="row" spacing={5}>
          <Grid item xs={4}>
            <ListTextItem image={Phone} value={number} />
          </Grid>
          <Grid item xs={6}>
            <ListTextItem image={MapTrifold} value={location} />
          </Grid>
        </Grid>
        <ListTextItem image={Scales} value={quantity} />
        <Grid item xs={12}>
          <ListTextItem
            image={Image}
            img={
              <img
                src={img}
                height={148.26}
                width={214.16}
                className={classes.imgStyle}
              />
            }
            secImage={
              <img
                src={secImage}
                height={148.26}
                width={214.16}
                className={classes.imgStyle}
              />
            }
          />
        </Grid>
      </Grid>
      <Grid xs={12} className={classes.isDivider}>
        {isDivider && <Divider />}
      </Grid>
      <Grid item style={{ paddingLeft: 7 }}>
        {heading && (
          <Heading
            headingText={heading}
            headerFontSize={theme.MetricsSizes.regular_xxx}
            headerFontWeight={theme.fontWeight.bold}
            headingColor={theme.Colors.secondary}
          />
        )}
        {scheduled && <OrderScheduleComp scheduleDetails={scheduled} />}
      </Grid>
      {bottomContent && (
        <DialogContentDetails
          contentDetails={orderVendorContent}
          leftContentFontSize={theme.MetricsSizes.small_xxx}
          rightContentFontSize={theme.MetricsSizes.small_xxx}
          leftContentFontWeight={theme.fontWeight.regular}
          rightContentFontWeight={theme.fontWeight.medium}
        />
      )}
    </Grid>
  );
};

export default OrderModalComp;
