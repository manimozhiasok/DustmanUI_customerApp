import {
  Divider,
  Grid,
  useTheme,
  Theme,
  makeStyles,
  Typography
} from '@material-ui/core';
import React from 'react';
import ListTextItem from 'src/components/ListTextItem';
import { Image, Phone, Scales, MapPin, MapTrifold, Date, DateIcon } from 'src/Assets';
import { DialogContentDetails, Heading } from 'src/components';
import OrderScheduleComp from '../OrderScheduleComp';


const useStyles = makeStyles((theme: Theme) => {
  return {
    heading: {
      fontFamily: 'DM Sans',
      fontWeight: 700,
      fontSize: 24,
      color: '#6CB044'
    },
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
   divider:{
    margin: theme.spacing(2, 0)
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
  state?:any;
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

  const scheduleDetails =[
   { state: orderState, day: orderDay, dateImage: <img src={orderDateImage}/>, schedule:pickupSchedule }
  ]

  const scheduled = [{state: state, day:day, dateImage: <img src={dateImage}/>, schedule:schedule}]
  return (
    <>
      <DialogContentDetails contentDetails={rightContent} />
      <ListTextItem image={MapPin} value={address} />
      {dividerLine && <Divider variant='middle' className={classes.divider}/>}
      {orderHeading && (
        <Heading
          headingText={orderHeading}
          headerFontSize={24}
          headerFontWeight={700}
          headingColor={'#6CB044'}
        />
      )}
        {orderSchedule && (
          <OrderScheduleComp scheduleDetails={scheduleDetails}/>                 
      )}
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
      <Grid style={{ paddingTop: 10 }}>
        {isDivider && <Divider variant="middle" />}
      </Grid>
      <Grid container>
      {heading && (
        <Heading
          headingText={heading}
          headerFontSize={24}
          headerFontWeight={700}
          headingColor={'#6CB044'}
        />
      )}
      {scheduled && (
       <OrderScheduleComp scheduleDetails={scheduled}/>      
      )}
      {bottomContent && (
        <DialogContentDetails
          contentDetails={orderVendorContent}
          leftContentFontSize={16}
          rightContentFontSize={16}
          leftContentFontWeight={400}
          rightContentFontWeight={500} />
      )}
      </Grid>
    </>
  );
};

export default OrderModalComp;
