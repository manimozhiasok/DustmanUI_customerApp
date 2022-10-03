import React, { useState } from 'react';
import {
  Grid,
  makeStyles,
  Theme,
  Typography,
  createStyles,
  Divider
} from '@material-ui/core';

type Props = {
  bgColor: string;
  height: string;
};

const useStyles = makeStyles<Theme, Props>((theme: Theme) =>
  createStyles({
    outerContainer: {
      border: '0.5px solid',
      borderColor: theme.Colors.greyDark,
      width: '100%'
    },
    imageContainer: {
        padding: theme.spacing(3,2,3.5,3)
    },
    statusContainer: {

    },
    contentContainer: {
        padding: theme.spacing(3,0,3.5,0),
        height:'100%',
        justifyContent: 'space-between'
    },
    actionButtonsContainer:
    {
        
    }
    

  })
);

const OrderListingComponent = ({
  backgroundColor,
  height,
  displayContent,
  }: {
  backgroundColor?: string;
  height?: string;
  displayContent:{
    displayImage: any,
    orderId: number
  }[],
  }) => {
  const classes = useStyles({
    bgColor: backgroundColor,
    height,
  });
  return(
    <>
    {displayContent.map((item,index) => {
        return(
    <Grid key={index} container direction='row' className={classes.outerContainer}>
        <Grid item xs={true}>
            <Grid container direction="row">
                <Grid item className={classes.imageContainer}>
                    <img src={item.displayImage} alt="image" />
                </Grid>
                <Grid item >
                    <Grid container direction="column" className={classes.contentContainer}>
                        <Grid item >
                            ORDER#{item.orderId}
                        </Grid>
                        <Grid item className={classes.actionButtonsContainer}>
                            Buttons
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        
        <Grid item className={classes.statusContainer}>
            Status
        </Grid>
    </Grid>
  );
})}
</>
  );
};

export default OrderListingComponent;
 