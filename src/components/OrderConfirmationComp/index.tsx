import {
  Grid,
  makeStyles,
  Theme,
  Typography,
  useTheme
} from '@material-ui/core';
import { ButtonComp, DialogContentDetails } from 'src/components';
import { useTranslation } from 'react-i18next';
import { CheckImageVendor } from 'src/Assets';

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontFamily: 'Source Serif Pro',
    fontWeight: theme.fontWeight.bold,
    color: theme.Colors.darkBlue
  },
  subtitle: {
    paddingTop: theme.spacing(1),
    fontWeight: theme.fontWeight.regular,
    fontSize: theme.MetricsSizes.tiny_xxx,
    color: theme.Colors.mediumBlack
  },
  outerContainer: {
    paddingTop: theme.spacing(6),
    textAlign: 'center'
  },
  buttonContainer: {
    padding: theme.spacing(4, 26)
  }
}));

function OrderConfirmationComp({
  handleButtonClick,
  bgBtnColor,
  rightContent,
  checkedIcon
}: {
  handleButtonClick: () => void;
  bgBtnColor?: string;
  rightContent: any[];
  checkedIcon?: boolean;
}) {
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Grid container direction="row">
      <DialogContentDetails contentDetails={rightContent} />
      <Grid container className={classes.outerContainer}>
        {checkedIcon && (
          <Grid item xs={12}>
            <img src={CheckImageVendor} width={'93.85px'} height={'93.85px'} />
          </Grid>
        )}
        <Grid item xs={12}>
          <Typography variant="h5" className={classes.title}>
            {t('PICKUP.goodToSee')}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.subtitle}>
            {t('PICKUP.notified')}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        item
        xs={12}
        className={classes.buttonContainer}
      >
        <ButtonComp
          btnBorderRadius={theme.MetricsSizes.large_xx}
          buttonText={t('PICKUP.confirm')}
          buttonFontSize={theme.MetricsSizes.small_xxx}
          btnWidth={342}
          height={theme.MetricsSizes.large_xxx}
          buttonFontWeight={theme.fontWeight.medium}
          onClickButton={handleButtonClick}
          backgroundColor={bgBtnColor || theme.Colors.secondary}
        />
      </Grid>
    </Grid>
  );
}

export default OrderConfirmationComp;
