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
import { ButtonComp, UHAddressModalComp } from 'src/components';
import { AddressData } from 'src/dustmanUI/Services/customerAddressService';

type styleProps = {
  radioColor?: string;
};

const useStyles = makeStyles<Theme, styleProps>((theme: Theme) => {
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
    },
    radioStyle: {
      '&.MuiRadio-colorSecondary.Mui-checked': {
        color: (props) => props.radioColor
      }
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
  bgButtonClr?: string;
  btnTextClr?: string;
  imageIcon?: string;
  radioColor?: string;
};

const UHPickYourAddressComp = ({
  handleSaveButtonClick,
  addressData,
  handleChangeAddress,
  bgButtonClr,
  btnTextClr,
  radioColor,
  imageIcon
}: SelectAddressComp) => {
  const theme = useTheme();
  const classes = useStyles({ radioColor });
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
                      className={classes.radioStyle}
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
            backgroundColor={bgButtonClr || theme.Colors.white}
            buttonFontSize={theme.MetricsSizes.small_xx + 1}
            variant="outlined"
            buttonTextColor={btnTextClr || theme.Colors.secondary}
            buttonFontWeight={theme.fontWeight.bold}
            btnWidth={'190px'}
            style={{
              marginTop: theme.MetricsSizes.small,
              alignSelf: 'center',
              padding: theme.MetricsSizes.tiny_x
            }}
            startIcon={<img src={imageIcon} />}
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
