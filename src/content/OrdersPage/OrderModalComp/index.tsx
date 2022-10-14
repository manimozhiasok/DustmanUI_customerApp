import { Divider, Grid, useTheme, Theme, makeStyles } from '@material-ui/core';
import ListTextItem from 'src/components/ListTextItem';
import { Image, Phone, Scales, MapPin, MapTrifold } from 'src/Assets';
import { DialogContentDetails, Heading } from 'src/components';
import OrderScheduleComp from '../OrderScheduleComp';

const useStyles = makeStyles((theme: Theme) => {
  return {
    leftContentStyle: {
      color: theme.Colors.mediumBlack,
      marginBottom: theme.MetricsSizes.regular_x
    },
    rightContainer: {
      color: theme.Colors.mediumGrey,
      marginBottom: theme.MetricsSizes.regular_x
    },
    rightStyle: {
      padding: theme.spacing(0.5)
    },
    divider: {
      margin: theme.spacing(2, 0)
    },
    isDivider: {
      padding: theme.spacing(1, 0)
    },
    details: {
      paddingLeft: theme.spacing(2)
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
  image: any;
  img?: any;
  orderDetails?: any;
  category?: string;
  loc?: string;
  headingText?: string;
  schedule?: any;
  time?: any;
  day?: any;
  bottomContent?: any;
  vendor?: string;
  mobile?: string | number;
  dividerLine?: any;
  orderHeading?: any;
  orderSchedule?: any;
  orderDay?: any;
  state?: any;
  dateImage?: any;
  orderState?: any;
  orderDateImage?: any;
  pickupSchedule?: any;
};

const OrderModalComp = (props: Props) => {
  const {
    isDivider,
    heading,
    address,
    number,
    location,
    quantity,
    image,
    img,
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
    pickupSchedule
  } = props;
  const theme = useTheme();
  const classes = useStyles();

  const rightContent = [
    { content: 'Category', value: category },
    { content: 'Location', value: loc }
  ];

  const orderVendorContent = [
    { content: 'Vendor Name', value: vendor },
    { content: 'Mobile Number', value: mobile }
  ];

  const scheduleDetails = [
    {
      state: orderState,
      day: orderDay,
      dateImage: <img src={orderDateImage} />,
      schedule: pickupSchedule
    }
  ];

  const scheduled = [
    {
      state: state,
      day: day,
      dateImage: <img src={dateImage} />,
      schedule: schedule
    }
  ];
  return (
    <>
      <DialogContentDetails contentDetails={rightContent} />
      <ListTextItem image={MapPin} value={address} />
      {dividerLine && <Divider variant="middle" className={classes.divider} />}
      {orderHeading && (
        <Heading
          headingText={orderHeading}
          headerFontSize={theme.MetricsSizes.regular_xxx}
          headerFontWeight={theme.fontWeight.bold}
          headingColor={theme.Colors.secondary}
        />
      )}
      {orderSchedule && <OrderScheduleComp scheduleDetails={scheduleDetails} />}
      <Grid container direction="row" spacing={5}>
        <Grid item>
          <ListTextItem image={Phone} value={number} />
        </Grid>
        <Grid item>
          <ListTextItem image={MapTrifold} value={location} />
        </Grid>
      </Grid>
      <ListTextItem image={Scales} value={quantity} />
      <ListTextItem
        image={Image}
        value={<img src={image} />}
        img={<img src={img} />}
      />
      <Grid className={classes.isDivider}>
        {isDivider && <Divider variant="middle" />}
      </Grid>
      <Grid container className={classes.details}>
        {heading && (
          <Heading
            headingText={heading}
            headerFontSize={theme.MetricsSizes.regular_xxx}
            headerFontWeight={theme.fontWeight.bold}
            headingColor={theme.Colors.secondary}
          />
        )}
        {scheduled && <OrderScheduleComp scheduleDetails={scheduled} />}
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
    </>
  );
};

export default OrderModalComp;
