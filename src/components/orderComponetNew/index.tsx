import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Confirm, locationIcon, weightIcon, YetToConfirm } from 'src/Assets';
import ListTextItem from '../ImageTextComponent';
import OrderButton from '../orderButton';

const useStyles = makeStyles<Theme>((theme: Theme) =>
  createStyles({
    outerContainer: {
      border: '0.5px solid',
      borderColor: theme.Colors.greyDark,
      width: '100%',
      marginBottom: theme.spacing(3),
      padding: theme.spacing(3.1, 2, 3.8, 2.9)
    },
    contentContainer: {
      height: '100%'
    },
    imageContainer: { padding: theme.spacing(0, 2, 0, 0) },
    type: {
      fontSize: theme.MetricsSizes.tiny_xxx
    },
    status: {
      fontSize: theme.MetricsSizes.tiny_xxx,
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
      fontWeight: theme.fontWeight.medium
    },
    imageAlign: {
      paddingLeft: theme.spacing(7),
      fontSize: theme.MetricsSizes.tiny_xxx
    },
    buttonAlign: {
      display: 'flex',
      paddingTop: theme.spacing(3.5)
    }
  })
);

const OrderComponentNew = ({
  orderComponent,
  isButton,
  onClickButton
}: {
  orderComponent: any[];
  isButton?: boolean;
  onClickButton: () => void;
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <>
      {orderComponent.map((item, index) => {
        return (
          <Grid
            container
            className={classes.outerContainer}
            direction="row"
            key={index}
          >
            <Grid container item xs={true} direction="row">
              <Grid item className={classes.imageContainer}>
                <img src={item.displayImage} alt="image" />
              </Grid>
              <Grid item className={classes.contentContainer}>
                <Typography className={classes.type}>
                  {t('orders')}:{item.orderId}
                </Typography>
                <Grid container direction="row">
                  <Typography className={classes.category}>
                    {t('category')}:{' '}
                    <span className={classes.categoryText}>
                      {item.category}
                    </span>
                  </Typography>
                  <Grid className={classes.imageAlign}>
                    <ListTextItem image={weightIcon} value={item.weight} />
                  </Grid>
                  <Grid className={classes.imageAlign}>
                    <ListTextItem image={locationIcon} value={item.place} />
                  </Grid>
                </Grid>
                <Grid item className={classes.buttonAlign}>
                  <OrderButton
                    isField={isButton}
                    onClickButton={onClickButton}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography className={classes.status}>
                <label className={classes.status}>{item.status}</label>
                {
                  <img
                    src={
                      item.status === 'Yet to Confirm' ? YetToConfirm : Confirm
                    }
                  />
                }
              </Typography>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};
export default OrderComponentNew;
