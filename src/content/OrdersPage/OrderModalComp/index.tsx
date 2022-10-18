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
      padding: theme.spacing(1, 0 ),
    },
    details: {
      paddingLeft: theme.spacing(2)
    },
    imgStyle:{
      borderRadius: 9.41344,
    },
    completedStyle:{
      // border: "1px solid blue",
      padding: theme.spacing(0, 0, 0, 1),
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
  secImage? : any;
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
    <Grid container>
    <>
      <DialogContentDetails contentDetails={rightContent} />
<Grid container>
      <Grid item xs={7}>
      <ListTextItem image={MapPin} value={address} />
      </Grid>
      <Grid item xs={12}className={classes.isDivider}> {dividerLine && <Divider variant="middle"/>}</Grid>
     <Grid item xs={12} className={classes.completedStyle}>
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
        <Grid item xs={3}>
          <ListTextItem image={Phone} value={number} />
        </Grid>
        <Grid item xs={9}>
          <ListTextItem image={MapTrifold} value={location} />
        </Grid>
      </Grid>
      <ListTextItem image={Scales} value={quantity} />
      <ListTextItem
        image={Image}
        img={<img src={img} height= {148.26} width={ 214.16}  className={classes.imgStyle}/>}
        secImage={<img src={secImage} height= {148.26} width={ 214.16} className={classes.imgStyle}/>}
      />
      </Grid>
      </Grid>
      <Grid xs={12} className={classes.isDivider}>
        {isDivider && <Divider variant="middle"/>}
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
    </Grid>
  );
};

export default OrderModalComp;
