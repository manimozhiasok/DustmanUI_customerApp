import {
  Divider,
  Grid,
  makeStyles,
  Radio,
  Theme,
  Typography,
  useTheme
} from '@material-ui/core';
import { useState } from 'react';
import { ButtonComp } from 'src/components';
import { useEdit } from 'src/hooks/useEdit';
import useUserInfo from 'src/hooks/useUserInfo';
import Plus from '../../Assets/Images/Plus.svg';
import PickupAddressModal from './PickupAddressModal';

const useStyles = makeStyles((theme: Theme) => {
  return {
    addressView: {
      color: theme.Colors.darkGrey,
      fontWeight: theme.fontWeight.mediumBold
    },
    gridStyle: {
      paddingLeft: theme.spacing(3.8),
      paddingTop: theme.spacing(2)
    },
    locTextStyle: {
      color: theme.Colors.darkBlue,
      fontWeight: theme.fontWeight.medium
    },
    dividerStyle: {
      padding: theme.spacing(2, 0)
    }
  };
});

const PickupAddress = ({ edit }: { edit: any }) => {
  const theme = useTheme();
  const classes = useStyles();
  const [openModal, setOpenModal] = useState({ open: false });
  const { userAddressDetails } = useUserInfo();
  const [selectedValue, setSelectedValue] = useState(0);

  const handleChange = (event: any) => {
    setSelectedValue(parseInt(event.target.value));
    edit.update({
      order_address_id: parseInt(event.target.value)
    });
  };

  const handleAddNewItem = () => {
    setOpenModal({ open: true });
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          {userAddressDetails.length &&
            userAddressDetails.map((item, index) => {
              return (
                <Grid container key={index} alignItems="center">
                  <Grid item>
                    <Radio
                      onChange={handleChange}
                      value={item.id}
                      checked={selectedValue === item.id}
                    />
                  </Grid>
                  <Grid item xs container spacing={1}>
                    <Grid item>
                      <Typography>{'location:'}</Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography className={classes.locTextStyle}>
                        {item?.city}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h6" className={classes.addressView}>
                        {item?.address}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className={classes.dividerStyle}>
                    {index === userAddressDetails?.length - 1 ? null : (
                      <Divider />
                    )}
                  </Grid>
                </Grid>
              );
            })}
        </Grid>
        <Grid container item xs={12} justifyContent="center">
          <ButtonComp
            buttonText={'ADD NEW ADDRESS'}
            backgroundColor={theme.Colors.white}
            buttonFontSize={theme.MetricsSizes.small_xx}
            variant="outlined"
            buttonTextColor={theme.Colors.secondary}
            buttonFontWeight={theme.fontWeight.bold}
            btnWidth={'200px'}
            style={{
              marginTop: theme.MetricsSizes.medium_xx,
              alignSelf: 'center'
            }}
            startIcon={<img src={Plus} />}
            onClickButton={handleAddNewItem}
          />
        </Grid>
      </Grid>
      {openModal.open && (
        <PickupAddressModal onClose={() => setOpenModal({ open: false })} />
      )}
    </>
  );
};

export default PickupAddress;
