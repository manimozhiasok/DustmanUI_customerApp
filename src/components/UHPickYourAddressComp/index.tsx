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
import { Plus } from 'src/Assets';
import { ButtonComp, UHAddressModalComp } from 'src/components';
import { AddressData } from 'src/Services/customerAddressService';

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

type SelectAddressComp = {
  handleSaveButtonClick?: (
    data: AddressData,
    modalCloseCallback: () => void
  ) => void;
  addressData?: any[];
  handleChangeAddress?: (selectedAddressId: number) => void;
};

const UHPickYourAddressComp = ({
  handleSaveButtonClick,
  addressData,
  handleChangeAddress
}: SelectAddressComp) => {
  const theme = useTheme();
  const classes = useStyles();
  const [openModal, setOpenModal] = useState({ open: false });
  const [selectedValue, setSelectedValue] = useState(0);

  const handleChange = (event: any) => {
    setSelectedValue(parseInt(event.target.value));
    handleChangeAddress(parseInt(event.target.value));
  };

  const handleAddNewItem = () => {
    setOpenModal({ open: true });
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          {addressData?.length ? (
            addressData.map((item, index) => {
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
                    {index === addressData?.length - 1 ? null : <Divider />}
                  </Grid>
                </Grid>
              );
            })
          ) : (
            <Typography className={classes.locTextStyle}>
              No address found!, Please add your pickup address.
            </Typography>
          )}
        </Grid>
        <Grid container item xs={12} justifyContent="center">
          <ButtonComp
            buttonText={'ADD NEW ADDRESS'}
            backgroundColor={theme.Colors.white}
            buttonFontSize={theme.MetricsSizes.small_xx + 1}
            variant="outlined"
            buttonTextColor={theme.Colors.secondary}
            buttonFontWeight={theme.fontWeight.bold}
            btnWidth={'190px'}
            style={{
              marginTop: theme.MetricsSizes.small,
              alignSelf: 'center',
              padding: theme.MetricsSizes.tiny_x
            }}
            startIcon={<img src={Plus} />}
            onClickButton={handleAddNewItem}
          />
        </Grid>
      </Grid>
      {openModal.open && (
        <UHAddressModalComp
          onClose={() => setOpenModal({ open: false })}
          handleSaveButtonClick={handleSaveButtonClick}
        />
      )}
    </>
  );
};

export default UHPickYourAddressComp;
