import { useState } from 'react';
import {
  makeStyles,
  Theme,
  useTheme,
  Grid,
  Typography
} from '@material-ui/core';
import { LinkComp } from 'src/components';

const useStyles = makeStyles((theme: Theme) => {
  return {
    leftContentStyle: {
      color: theme.Colors.mediumBlack,
      marginBottom: theme.MetricsSizes.regular_x
    },
    rightContainer: {
      color: theme.Colors.mediumGrey,
      marginBottom: theme.MetricsSizes.regular_x
    },
    rightStyle:{
      marginLeft:theme.spacing(1)
    }
  };
});

type Props = { contentDetails: any[] };

const DialogContentDetails = (props: Props) => {
  const { contentDetails } = props;
  const theme = useTheme();
  const classes = useStyles();
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
