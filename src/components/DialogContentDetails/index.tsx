import {
  makeStyles,
  Theme,
  useTheme,
  Grid,
  Typography
} from '@material-ui/core';
import { LinkComp } from 'src/components';

const useStyles = makeStyles<Theme, Props>((theme: Theme) => {
  return {
    leftContentStyle: {
      Color: (props) => props.leftContentColor || theme.Colors.mediumBlack,
      fontSize: (props) => props.leftContentFontSize,
      fontWeight: (props) => props.leftContentFontWeight,
      marginBottom: (props) =>
        props.leftContentMarginBottom || theme.MetricsSizes.regular_x
    },
    rightContainer: {
      Color: (props) => props.rightContentColor || theme.Colors.mediumGrey,
      fontSize: (props) => props.rightContentFontSize,
      fontWeight: (props) => props.rightContentFontWeight,
      marginBottom: (props) => props.rightContentMarginBottom || theme.MetricsSizes.regular_x
    },
    rightStyle: {
      marginLeft: theme.spacing(1)
    }
  };
});

type Props = {
  leftContentColor?: any;
  rightContentColor?: any;
  leftContentFontSize?: any;
  rightContentFontSize?: any;
  leftContentFontWeight?: any;
  rightContentFontWeight?: any;
  leftContentMarginBottom?: any;
  rightContentMarginBottom?: any;
};

const DialogContentDetails =
  ({ contentDetails,
    leftContentColor,
    rightContentColor,
    leftContentFontSize,
    rightContentFontSize,
    leftContentFontWeight,
    rightContentFontWeight,
    leftContentMarginBottom,
    rightContentMarginBottom}: {
      contentDetails: any[];
  leftContentColor?: any;
  rightContentColor?: any;
  leftContentFontSize?: any;
  rightContentFontSize?: any;
  leftContentFontWeight?: any;
  rightContentFontWeight?: any;
  leftContentMarginBottom?: any;
  rightContentMarginBottom?:any;
    }) => {
    const classes = useStyles({
      leftContentColor,
      rightContentColor,
      leftContentFontSize,
      rightContentFontSize,
      leftContentFontWeight,
      rightContentFontWeight,
      leftContentMarginBottom,
      rightContentMarginBottom
    });
    const theme: Theme = useTheme();
    return (
      <>
        {contentDetails.map((item: any, index: number) => {
          return (
            <Grid container xs={12} key={index}>
              <Grid item>
                <Typography variant="h4" className={classes.leftContentStyle}>
                  {item.content}:
                </Typography>
              </Grid>
              <Grid item className={classes.rightStyle}>
                {item.isLink ? (
                  <LinkComp title={item.value} />
                ) : (
                  <Typography variant="h4" className={classes.rightContainer}>
                    {item.value}
                  </Typography>
                )}
              </Grid>
            </Grid>
          );
        })}
      </>
    );
  };

export default DialogContentDetails;
