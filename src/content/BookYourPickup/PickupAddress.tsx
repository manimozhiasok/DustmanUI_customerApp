import {
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  makeStyles,
  Radio,
  RadioGroup,
  Theme,
  Typography,
  useTheme
} from '@material-ui/core';
import React, { useState } from 'react';
import { ButtonComp, DialogContentDetails } from 'src/components';
import Plus from '../../Assets/Images/Plus.svg';
import PickupAddressModal from './PickupAddressModal';

const useStyles = makeStyles((theme: Theme) => {
  return {
    radioLableStyle: {
      fontSize: theme.MetricsSizes.small_xxx - 1,
      color: theme.Colors.darkGrey,
      fontWeight: theme.fontWeight.mediumBold
    },
    gridStyle: {
      paddingLeft: theme.spacing(3.8),
      paddingTop: theme.spacing(2)
    },
    leftContent: {
      color: theme.Colors.darkBlue,
      fontWeight: theme.fontWeight.medium
    },
    rightContent: {
      color: theme.Colors.mediumGrey,
      fontWeight: theme.fontWeight.regular
    },
    formStyle: {
      //paddingBottom: theme.spacing(4)
    },
    dividerStyle: {
      padding: theme.spacing(2)
    },
    buttonStyle: {
      justifyContent: 'center'
    }
  };
});

const PickupAddress = ({ edit }: { edit: any }) => {
  const theme = useTheme();
  const classes = useStyles();
  const [openModal, setOpenModal] = useState({ open: false });

  const data = [
    {
      id: '1',
      address:
        'New No: 42, 4th cross street, Ram Nagar, Velachery, Chennai 600042. ',
      location: 'Location:',
      loc: 'Velachery'
    },
    {
      id: '2',
      address: 'New No: 50, 5th cross street, TNagar, Chennai 600042.',
      location: 'Location:',
      loc: 'Sriberambadur'
    },
    {
      id: '3',
      address: `${edit.getValue('order_address').address_line1}, ${
        edit.getValue('order_address').address_line2
      }, ${edit.getValue('order_address').city}, ${
        edit.getValue('order_address').state
      }`,
      location: 'Location:',
      loc: `${edit.getValue('order_address').city}`
    }
  ];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event, 'from handleChange');
  };

  const handleAddNewItem = () => {
    setOpenModal({ open: true });
  };

  return (
    <Grid container>
      <RadioGroup>
        {data.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Grid container className={classes.gridStyle}>
                <Grid item xs={2}>
                  <Typography>{item.location}</Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography className={classes.leftContent}>
                    {item.loc}
                  </Typography>
                </Grid>
              </Grid>
              <FormControlLabel
                key={item.address}
                value={item.address}
                id={item.id}
                control={<Radio onChange={handleChange} />}
                label={
                  <Typography className={classes.radioLableStyle}>
                    {item.address}
                  </Typography>
                }
                className={classes.formStyle}
              />
              {index === data.length - 1 ? '' : <Divider />}
            </React.Fragment>
          );
        })}
      </RadioGroup>
      <Grid container justifyContent="center" item xs={12}>
        <ButtonComp
          buttonText={'ADD NEW ADDRESS'}
          backgroundColor="white"
          buttonFontSize={theme.MetricsSizes.small_xx}
          variant="outlined"
          buttonTextColor={theme.Colors.secondary}
          buttonFontWeight={theme.fontWeight.bold}
          btnWidth={'200px'}
          style={{
            marginTop: 30,
            justifyContent: 'center'
          }}
          startIcon={<img src={Plus} />}
          onClickButton={handleAddNewItem}
        />
      </Grid>
      {openModal.open && (
        <PickupAddressModal
          edit={edit}
          onClose={() => setOpenModal({ open: false })}
        />
      )}
    </Grid>
  );
};

export default PickupAddress;
