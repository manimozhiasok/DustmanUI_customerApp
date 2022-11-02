import {
  Grid,
  makeStyles,
  Theme,
  Typography,
  useTheme
} from '@material-ui/core';
import { checkImage } from 'src/Assets';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) => ({
  text: {
    color: theme.Colors.black,
    fontFamily: 'Source Serif Pro',
    fontWeight: theme.fontWeight.bold,
    fontSize: theme.MetricsSizes.regular,
    paddingBottom: theme.spacing(3)
  },
  subText: {
    color: theme.Colors.lightBlueGrey,
    fontWeight: theme.fontWeight.regular,
    fontSize: theme.MetricsSizes.small_x
  },
  mainContainer: {
    textAlign: 'center'
  },
  successText: {
    paddingTop: theme.spacing(3)
  }
}));

function OrderSuccess() {
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Grid container className={classes.mainContainer}>
      <Grid item xs={12}>
        <img src={checkImage} width={'93.85px'} height={'93.85px'} />
      </Grid>
      <Grid item xs={12} className={classes.successText}>
        <Typography className={classes.text}>{t('orderPlaced')}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.subText}>
          {t('orderConfirm')}
          <br />
          {t('orderDescription')}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default OrderSuccess;
