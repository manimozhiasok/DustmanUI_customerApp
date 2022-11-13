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
      color: theme.Colors.mediumBlack,
      fontSize: (props) => props.leftContentFontSize,
      fontWeight: (props) => props.leftContentFontWeight,
      marginBottom: theme.MetricsSizes.tiny_xx
    },
    rightContentStyle: {
      color: theme.Colors.mediumGrey,
      fontSize: (props) => props.rightContentFontSize,
      fontWeight: (props) => props.rightContentFontWeight
    },
    rightContainer: {
      marginLeft: theme.MetricsSizes.tiny_xxx
    }
  };
});

type Props = {
  leftContentFontSize?: any;
  rightContentFontSize?: any;
  leftContentFontWeight?: any;
  rightContentFontWeight?: any;
};

const DialogContentDetails = ({
  contentDetails,
  leftContentFontSize,
  rightContentFontSize,
  leftContentFontWeight,
  rightContentFontWeight
}: {
  contentDetails: any[];
  leftContentFontSize?: any;
  rightContentFontSize?: any;
  leftContentFontWeight?: any;
  rightContentFontWeight?: any;
}) => {
  const classes = useStyles({
    leftContentFontSize,
    rightContentFontSize,
    leftContentFontWeight,
    rightContentFontWeight
  });
  const theme = useTheme();
  return (
    <Grid container>
      {contentDetails.map((item: any, index: number) => {
        return (
          <Grid item container xs={12} key={index}>
            <Grid item>
              <Typography variant="h4" className={classes.leftContentStyle}>
                {item.content}:
              </Typography>
            </Grid>
            <Grid item xs className={classes.rightContainer}>
              {item.isLink ? (
                <LinkComp title={item.value} />
              ) : (
                <Typography variant="h4" className={classes.rightContentStyle}>
                  {item.value}
                </Typography>
              )}
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default DialogContentDetails;
