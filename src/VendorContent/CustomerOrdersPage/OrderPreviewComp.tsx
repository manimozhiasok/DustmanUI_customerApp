import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
  useTheme,
  Checkbox,
  Fab
} from '@material-ui/core';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Confirm, locationIcon, weightIcon, YetToConfirm } from 'src/Assets';
import { ButtonComp, ImageTextComponent } from 'src/components';
import { CUSTOMER_ORDER_STATUS } from 'src/Config/constant';
import { getDateFormat } from 'src/Utils';

const useStyles = makeStyles<Theme>((theme: Theme) =>
  createStyles({
    checkbox: {},

    outerContainer: {
      border: '0.5px solid',
      borderColor: theme.Colors.greyDark,
      width: '100%',
      marginBottom: theme.spacing(3),
      padding: theme.spacing(3.1, 2, 3.8, 3)
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
    }
  })
);

const OrderPreviewComp = ({
  orderItems,
  isCancelButton,
  onClickViewDetails,
  onClickCancelButton,
  orderStatus
}: {
  orderItems: any[];
  isCancelButton?: boolean;
  onClickViewDetails?: (orderData: any) => void;
  onClickCancelButton?: (orderId: number) => void;
  orderStatus?: any;
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();
  const [item, setItem] = useState([]);

  let handleCheckboxChange = (event) => {
    let newArray = [event.target.id];
    console.log('targetevent', event.target.id);
    if (item.includes(event.target.id)) {
      newArray = newArray.filter((value) => value !== event.target.id);
    }
    setItem(newArray);
    console.log('newArray', newArray);
  };
  return (
    <>
      {orderItems.map((item, index) => {
        const { getTime, getDateString } = getDateFormat(item?.updated_at);
        return (
          <Grid
            container
            className={classes.outerContainer}
            direction="row"
            key={index}
          >
            <Grid container item xs direction="row">
              <Grid item className={classes.imageContainer}>
                <img
                  src={item?.order_images[0]}
                  alt="order_images"
                  className={classes.imageStyle}
                />
              </Grid>
              <Grid item className={classes.contentContainer}>
                <Typography className={classes.subText}>
                  {t('orders')}
                  {item?.order_id}
                </Typography>
                <Grid style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography className={classes.category}>
                    {t('category')}:
                    <span className={classes.categoryText}>
                      {item?.order_items?.toString()}
                    </span>
                  </Typography>
                  <Grid className={classes.imageAlign}>
                    <ImageTextComponent
                      icon={weightIcon}
                      value={`${item?.quantity_kg} Kg`}
                    />
                  </Grid>
                  <Grid className={classes.imageAlign}>
                    <ImageTextComponent
                      icon={locationIcon}
                      value={item?.city}
                    />
                  </Grid>
                </Grid>
                <Grid className={classes.buttonAlign}>
                  <ButtonComp
                    buttonText={'VIEW DETAILS'}
                    backgroundColor={theme.Colors.whiteLightGrey}
                    buttonFontSize={theme.MetricsSizes.tiny_xxx}
                    variant="outlined"
                    buttonTextColor={theme.Colors.secondaryOrange}
                    height={theme.MetricsSizes.medium_xx}
                    btnWidth={'110px'}
                    style={{
                      marginRight: theme.spacing(1.25),
                      borderColor: theme.Colors.secondaryOrange
                    }}
                    onClickButton={() => onClickViewDetails(item)}
                  />
                  {isCancelButton &&
                    item?.status_id !== CUSTOMER_ORDER_STATUS.Completed && (
                      <ButtonComp
                        buttonText={
                          item?.status_id === CUSTOMER_ORDER_STATUS.New
                            ? 'BUY ORDER'
                            : 'CANCEL'
                        }
                        backgroundColor={theme.Colors.secondaryOrange}
                        buttonFontSize={theme.MetricsSizes.tiny_xxx}
                        buttonTextColor={theme.Colors.white}
                        height={theme.MetricsSizes.medium_xx}
                        btnWidth={'100px'}
                        onClickButton={() =>
                          onClickCancelButton(item?.order_id)
                        }
                      />
                    )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              {Checkbox && item?.status_id === CUSTOMER_ORDER_STATUS.New && (
                <Checkbox
                  className={classes.checkbox}
                  id={item.orderId}
                  onChange={handleCheckboxChange}
                />
              )}
              {orderStatus && item?.status_id !== CUSTOMER_ORDER_STATUS.New && (
                <Grid className={classes.status}>
                  <Typography className={classes.subText}>
                    {(item?.status_id === CUSTOMER_ORDER_STATUS.Pending &&
                      'Yet to Confirm') ||
                      (item?.status_id === CUSTOMER_ORDER_STATUS.Confirmed &&
                        `Scheduled on ${getDateString}, ${getTime}`) ||
                      (item?.status_id === CUSTOMER_ORDER_STATUS.Completed &&
                        `Completed on ${getDateString}, ${getTime}`)}
                  </Typography>
                  <img
                    src={
                      item?.status_id === CUSTOMER_ORDER_STATUS.Pending
                        ? YetToConfirm
                        : Confirm
                    }
                  />
                </Grid>
              )}
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};
export default OrderPreviewComp;
