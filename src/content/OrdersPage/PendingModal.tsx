import { useEffect } from 'react';
import {
  makeStyles,
  Theme,
  useTheme,
} from '@material-ui/core';
import { DialogComp, DialogContentDetails } from 'src/components';
import {
  Image,
  Phone,
  Scales,
  MapPin,
  MapTrifold,
  Paper,
  Iron
} from 'src/Assets';
import ModalComp from 'src/components/ModalComp';

const useStyles = makeStyles((theme: Theme) => {
  return {
    dialogPaper: {
      width: 847,
      height: 555,
      padding: theme.spacing(2, 2, 2, 5),
      borderRadius: theme.MetricsSizes.regular
    },
    images: {
      height: 148.26,
      width: 214.16,
      padding: theme.spacing(0, 0, 0, 0),
    },
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
    const rightContent = [
      { content: 'Category', value: 'Aluminum, News Paper... ' },
      { content: 'Location', value: 'Velachery' }
    ];

    const orderDetails = [
      {
        id: 1,
        title: <img src={MapPin} />,
        value:
          ' New No: 42, 4th cross street, Ram Nagar, Velachery, Chennai 600042.'
      },
      {
        id: 2,
        title: <img src={Phone} />,
        value: '9840046988',
        title1: <img src={MapTrifold} />,
        value1: 'Map Location'
      },
      { id: 3, title: <img src={Scales} />, value: '25 kgs' },
      {
        id: 4,
        title: <img src={Image} />,
        value: <img src={Paper}  className={classes.images}/>,
        img: <img src={Iron}  className={classes.images}/>
      }
    ];

    return (
      <>
        <DialogContentDetails contentDetails={rightContent} />
        <ModalComp orderDetails={orderDetails} />
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
