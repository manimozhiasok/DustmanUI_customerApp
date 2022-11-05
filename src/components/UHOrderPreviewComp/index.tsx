import {
  Checkbox,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
  useTheme
} from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { locationIcon, weightIcon } from 'src/Assets';
import { ButtonComp, ImageTextComponent } from 'src/components';
type StyleProp = {
  checkBoxColor?: string;
};

const useStyles = makeStyles<Theme, StyleProp>((theme: Theme) =>
  createStyles({
    outerContainer: {
      border: '0.5px solid',
      borderColor: theme.Colors.greyDark,
      width: '100%',
      marginBottom: theme.spacing(3),
      padding: theme.spacing(3.1, 2, 3.8, 3),
      background: theme.Colors.whiteLightGrey
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: theme.spacing(1)
    },
    imageContainer: { paddingRight: theme.spacing(2) },
    subText: {
      fontSize: theme.MetricsSizes.tiny_xxx,
      color: theme.Colors.darkGrey
    },
    status: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(2)
    },
    category: {
      fontSize: theme.MetricsSizes.small_x,
      paddingTop: theme.spacing(0.4)
    },
    categoryText: {
      color: theme.Colors.mediumGrey,
      fontWeight: theme.fontWeight.medium,
      marginLeft: theme.MetricsSizes.tiny
    },
    imageAlign: {
      paddingLeft: theme.spacing(4.5)
    },
    buttonAlign: {
      display: 'flex',
      paddingTop: theme.spacing(3),
      flexDirection: 'row',
      alignItems: 'center'
    },
    imageStyle: {
      width: '100px',
      height: '100px'
    },
    checkbox: {
      '&.MuiCheckbox-colorSecondary.Mui-checked': {
        backgroundColor: theme.Colors.white,
        color: (prop) => prop.checkBoxColor || theme.Colors.orangePrimary
      }
    }
  })
);

type OrderCompProp = {
  orderItems: any;
  isButtonOne?: boolean;
  isButtonTwo?: boolean;
  handleClickButtonOne?: (orderData: any) => void;
  handleClickButtonTwo?: (orderId: number) => void;
  isCheckBox?: boolean;
  handleCheckboxChange?: (orderId: number, isChecked: boolean) => void;
  buttonOneText?: string;
  buttonTwoText?: string;
  orderStatusText?: string;
  statusIcon?: any;
  buttonOneStyle?: React.CSSProperties;
  buttonTwoStyle?: React.CSSProperties;
  isButtonThree?: boolean;
  buttonThreeText?: string;
  buttonThreeStyle?: React.CSSProperties;
  checkBoxColor?: string;
  handleClickButtonThree?: (orderData: any) => void;
};

const UHOrderPreviewComp = (props: OrderCompProp) => {
  const {
    orderItems,
    isButtonTwo = false,
    isButtonOne = true,
    handleClickButtonOne,
    handleClickButtonTwo,
    isCheckBox = false,
    handleCheckboxChange,
    buttonTwoText,
    buttonOneText,
    orderStatusText,
    statusIcon,
    buttonOneStyle,
    buttonTwoStyle,
    isButtonThree,
    buttonThreeText,
    buttonThreeStyle,
    checkBoxColor,
    handleClickButtonThree
  } = props;
  const classes = useStyles({ checkBoxColor });
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <>
      <Grid
        container
        className={classes.outerContainer}
        direction="row"
        alignItems={isCheckBox ? 'center' : 'flex-start'}
      >
        <Grid container item xs direction="row">
          <Grid item className={classes.imageContainer}>
            <img
              src={orderItems?.order_images[0]}
              alt="order_images"
              className={classes.imageStyle}
            />
          </Grid>
          <Grid item className={classes.contentContainer}>
            <Typography className={classes.subText}>
              {t('orders')}
              {orderItems?.id}
            </Typography>
            <Grid style={{ display: 'flex', alignItems: 'center' }}>
              <Typography className={classes.category}>
                {t('category')}:
                <span className={classes.categoryText}>
                  {orderItems?.order_items?.toString()}
                </span>
              </Typography>
              <Grid className={classes.imageAlign}>
                <ImageTextComponent
                  icon={weightIcon}
                  value={`${orderItems?.quantity_kg} Kg`}
                />
              </Grid>
              <Grid className={classes.imageAlign}>
                <ImageTextComponent
                  icon={locationIcon}
                  value={orderItems?.city}
                />
              </Grid>
            </Grid>
            <Grid className={classes.buttonAlign}>
              {isButtonOne ? (
                <ButtonComp
                  buttonText={buttonOneText || 'VIEW DETAILS'}
                  backgroundColor={theme.Colors.whiteLightGrey}
                  buttonFontSize={theme.MetricsSizes.tiny_xxx}
                  variant="outlined"
                  buttonTextColor={theme.Colors.secondary}
                  height={theme.MetricsSizes.medium_xx}
                  btnWidth={'110px'}
                  style={{
                    marginRight: theme.spacing(1.25),
                    borderColor: theme.Colors.secondary,
                    borderRadius: theme.MetricsSizes.tiny,
                    ...buttonOneStyle
                  }}
                  onClickButton={() => handleClickButtonOne(orderItems)}
                />
              ) : null}
              {isButtonTwo ? (
                <ButtonComp
                  buttonText={buttonTwoText || 'CANCEL'}
                  buttonFontSize={theme.MetricsSizes.tiny_xxx}
                  buttonTextColor={theme.Colors.white}
                  height={theme.MetricsSizes.medium_xx}
                  style={{
                    marginRight: theme.spacing(1.25),
                    borderRadius: theme.MetricsSizes.tiny,
                    ...buttonTwoStyle
                  }}
                  btnWidth={'72px'}
                  onClickButton={() =>
                    handleClickButtonTwo(orderItems?.order_id)
                  }
                />
              ) : null}
              {isButtonThree ? (
                <ButtonComp
                  buttonText={buttonThreeText || 'COMPLETE'}
                  buttonFontSize={theme.MetricsSizes.tiny_xxx}
                  buttonTextColor={theme.Colors.white}
                  height={theme.MetricsSizes.medium_xx}
                  style={{
                    borderRadius: theme.MetricsSizes.tiny,
                    ...buttonThreeStyle
                  }}
                  btnWidth={'72px'}
                  onClickButton={() => handleClickButtonThree(orderItems)}
                />
              ) : null}
            </Grid>
          </Grid>
        </Grid>
        {isCheckBox && (
          <Grid item>
            <Checkbox
              className={classes.checkbox}
              onChange={(_, checked) =>
                handleCheckboxChange(orderItems?.order_id, checked)
              }
            />
          </Grid>
        )}
        {orderStatusText && (
          <Grid item>
            <Grid className={classes.status}>
              <Typography className={classes.subText}>
                {orderStatusText}
              </Typography>
              <img src={statusIcon} />
            </Grid>
          </Grid>
        )}
      </Grid>
    </>
  );
};
export default UHOrderPreviewComp;
