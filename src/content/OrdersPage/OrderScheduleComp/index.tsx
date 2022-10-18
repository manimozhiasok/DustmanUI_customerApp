import { Grid, Typography, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  leftContentStyle: {
    color: theme.Colors.mediumBlack
    // marginBottom: theme.MetricsSizes.regular_x
  },
  rightContainer: {
    color: theme.Colors.mediumGrey,
    marginBottom: theme.MetricsSizes.tiny
  },
  rightStyle: {
    padding: theme.spacing(0.5)
  },
  dotStyle:{paddingLeft: theme.spacing(0.5)}
}));

type Props = {
  scheduleDetails: any;
};

const OrderScheduleComp = (props: Props) => {
  const { scheduleDetails } = props;
  const classes = useStyles();

  return (
    <Grid container xs={12}>
      {scheduleDetails.map(
        (
          item: {
            state:
              | boolean
              | React.ReactChild
              | React.ReactFragment
              | React.ReactPortal;
            day:
              | boolean
              | React.ReactChild
              | React.ReactFragment
              | React.ReactPortal;
            dateImage: string;
            dot: any;
            schedule:
              | boolean
              | React.ReactChild
              | React.ReactFragment
              | React.ReactPortal;
          },
          
          index: React.Key
        ) => {
          return (
            <>
              <Grid item key={index}>
                <Typography variant="h4" className={classes.leftContentStyle}>
                  {item.state}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4" className={classes.leftContentStyle}>
                  {item.day}
                </Typography>
              </Grid>
              <Grid item  className={classes.dotStyle}>
                  {item.dot}
              </Grid>
              <Grid item className={classes.rightStyle}>
                {item.dateImage}
              </Grid>
              <Grid item>
                <Typography variant="h4" className={classes.rightContainer}>
                  {item.schedule}
                </Typography>
              </Grid>
            </>
          );
        }
      )}
    </Grid>
  );
};

export default OrderScheduleComp;
