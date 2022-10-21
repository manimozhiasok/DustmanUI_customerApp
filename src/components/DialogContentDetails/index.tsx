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
    rightContainer: {
      color: theme.Colors.mediumGrey,
      fontSize: (props) => props.rightContentFontSize,
      fontWeight: (props) => props.rightContentFontWeight
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
    <>
      <Grid container style={{ paddingLeft: 7 }}>
        {contentDetails.map((item: any, index: number) => {
          return (
            <Grid container key={index}>
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
      </Grid>
    </>
  );
};

export default DialogContentDetails;
