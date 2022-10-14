import { useEffect } from 'react';
import { Grid, makeStyles, Theme, useTheme, Divider } from '@material-ui/core';
import { DialogComp, DialogContentDetails, Heading } from 'src/components';
import {
  Image,
  Phone,
  Scales,
  MapPin,
  MapTrifold,
  Paper,
  Iron
} from 'src/Assets';
import ModalComp from './OrderModalComp';
import ListTextItem from 'src/components/ListTextItem';
import OrderModalComp from './OrderModalComp';

const useStyles = makeStyles((theme: Theme) => {
  return {
    dialogPaper: {
      width: 847,
      height: 555,
      padding: theme.spacing(2, 2, 2, 5),
      borderRadius: theme.MetricsSizes.regular
    },
    images: {
      // height: 148.26,
      // width: 214.16,
      paddingRight: theme.spacing(1)
    },
    heading: {
      color: 'green'
    }
  };
});

type Props = {
  onClose: () => void;
};

const CompletedOrderModal = (props: Props) => {
  const { onClose } = props;
  const theme = useTheme();
  const classes = useStyles();

  useEffect(() => {
    //api call to get data
  }, []);

  const renderDialogContent = () => {
    const rightContent = [
      { content: 'Category', value: 'Aluminum, News Paper... ' },
      { content: 'Location', value: 'Velachery' }
    ];

    // const orderDetails = [
    //   {
    //     id: 1,
    //     address: 'New No: 42, 4th cross street, Ram Nagar, Velachery, Chennai 600042.',
    //     phone: "8375476746",
    //     map: "Map Location",
    //     quantity: "25kg",
    //     image:<img src={Paper} height="148.26" width="214.16" className={classes.images}/>,
    //     image1:<img src={Iron} height="148.26" width="214.16" className={classes.images}/>,
    //   },
    // {
    //   id: 2,
    //   phone: "8978675643",
    //   map:"Map Location"
    // },
    // { id: 3, quantity: '25 kgs' },
    // {
    //   id: 4,
    //   title: <img src={Image} />,
    //   image: <img src={Paper} height="148.26" width="214.16" className={classes.images}/>,
    //   image1: <img src={Iron} height="148.26" width="214.16" className={classes.images}/>
    // }
    // ];

    return (
      <>
          <OrderModalComp
          address={'New No: 42, 4th cross street, Ram Nagar, Velachery, Chennai 600042.'}
          number={9840046988}
          orderHeading={'Order Completed'}
          location={'Map Location'}
          quantity={'25 kgs'}
          image={Paper}
          img={Iron}
          dividerLine
          category={'category'} 
          loc={'Location'}     
          orderDay={'Mon, 01 Jan .'}  
          orderSchedule={'9:00AM - 12:00PM'}
           />
        {/* <ListTextItem 
        image={MapPin}
        value={'New No: 42, 4th cross street, Ram Nagar, Velachery, Chennai 600042.'} />
        <Grid container direction='row' spacing={5}>
          <Grid item>
            <Divider variant="middle"/>
          <ListTextItem 
        image={Phone}
        value={'364656456'} />
          </Grid>
          <Grid item>
             <ListTextItem 
        image={MapTrifold}
        value={'Map Location'} />
         </Grid>
         </Grid>
         <ListTextItem 
        image={Scales}
        value={'25 kg'} />
        <Grid container spacing={2} direction="row">
        <Grid item>
        <ListTextItem 
        image={Image}
        value={<img src={Paper}/>} />
        </Grid>
        <Grid item>
        <ListTextItem 
        value={<img src={Iron}/>} 
        />    
        </Grid>
        </Grid> */}
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

export default CompletedOrderModal;
