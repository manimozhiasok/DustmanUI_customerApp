import { useEffect } from 'react';
import {
  Grid,
  makeStyles,
  Theme,
  useTheme,
  Divider
} from '@material-ui/core';
import { ButtonComp, DialogComp, DialogContentDetails, Heading } from 'src/components';
import {
  Image,
  Phone,
  Scales,
  MapPin,
  MapTrifold,
  Paper,
  Iron,
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
    heading:{
      color: "green"
    }
  };
});

type Props = {
  onClose: () => void;
};

const PendingModal = (props: Props) => {
  const { onClose} = props;
  const theme = useTheme();
  const classes = useStyles();

  useEffect(() => {
    //api call to get data
  }, []);

  const renderDialogContent = () => {
    // const rightContent = [
    //   { content: 'Category', value: 'Aluminum, News Paper... ' },
    //   { content: 'Location', value: 'Velachery' }
    // ];

    return (
      <>
      {/* <DialogContentDetails contentDetails={rightContent} /> */}
        <OrderModalComp 
          address={'New No: 42, 4th cross street, Ram Nagar, Velachery, Chennai 600042.'}
          number={9840046988}
          location={'Map Location'}
          quantity={'25 kgs'}
          image={Paper}
          img={Iron} 
          category = {'Category'}
          loc ={'Location'} 
          />
          <Grid container justifyContent='center'>
          <ButtonComp
          buttonText={'Cancel'}
          backgroundColor="#6BB043"
          buttonFontSize={18}
          buttonTextColor="#FFFFFF"
          buttonFontWeight={500}
          btnBorderRadius={209.338}
          height={'48px'}
          btnWidth={'142px'}
          style={{marginRight: 10 }}
          // onClickButton={onClick}
        />
        </Grid>
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

export default PendingModal;
