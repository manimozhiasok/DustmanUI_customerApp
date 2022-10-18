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
      Color: theme.Colors.mediumBlack,
      fontSize: (props) => props.leftContentFontSize,
      fontWeight: (props) => props.leftContentFontWeight,
      marginBottom: theme.MetricsSizes.regular_x
    },
    rightContainer: {
      Color: theme.Colors.mediumGrey,
      fontSize: (props) => props.rightContentFontSize,
      fontWeight: (props) => props.rightContentFontWeight,
      marginBottom:  (props) => props.rightContentMarginBottom,
    },
    rightStyle: {
      marginLeft: theme.spacing(1)
    }
  };
});

type Props = {
  leftContentFontSize?: any;
  rightContentFontSize?: any;
  leftContentFontWeight?: any;
  rightContentFontWeight?: any;
  rightContentMarginBottom?: any;
};

const DialogContentDetails = ({
  contentDetails,
  leftContentFontSize,
  rightContentFontSize,
  leftContentFontWeight,
  rightContentFontWeight,
  rightContentMarginBottom,
}: {
  contentDetails: any[];
  leftContentFontSize?: any;
  rightContentFontSize?: any;
  leftContentFontWeight?: any;
  rightContentFontWeight?: any;
  rightContentMarginBottom?: any;
}) => {
  const classes = useStyles({
    leftContentFontSize,
    rightContentFontSize,
    leftContentFontWeight,
    rightContentFontWeight,
    rightContentMarginBottom
  });
  const theme: Theme = useTheme();
  return (
    <>
      {contentDetails.map((item: any, index: number) => {
        return (
          <Grid container key={index}>
              <Typography variant="h4" className={classes.leftContentStyle}>
                {item.content}:
              </Typography>
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
