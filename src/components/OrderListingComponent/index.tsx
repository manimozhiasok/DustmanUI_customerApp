import React, { useState } from 'react';
import {
  Grid,
  makeStyles,
  Theme,
  Typography,
  createStyles,
  Divider
} from '@material-ui/core';
import { locationIcon, weightIcon } from 'src/Assets';
import ButtonComp from '../ButtonComp';

type Props = {
  bgColor: string;
  height: string;
};

const useStyles = makeStyles<Theme, Props>((theme: Theme) =>
  createStyles({
    outerContainer: {
      border: '0.5px solid',
      borderColor: theme.Colors.greyDark,
      width: '100%',
      marginBottom: theme.spacing(3),
      padding: theme.spacing(3.1, 2, 3.8, 2.9)
    },
    imageContainer: { padding: theme.spacing(0, 2, 0, 0) },
    statusContainer: {},
    contentContainer: {
      height: '100%',
      justifyContent: 'space-evenly'
    },
    actionButtonsContainer: {
      display: 'flex'
      //justifyContent: 'space-between'
    }
  })
);

const OrderListingComponent = ({
  backgroundColor,
  height,
  displayContent
}: {
  backgroundColor?: string;
  height?: string;
  displayContent: {
    displayImage: any;
    orderId: number;
    category: string;
    weight: string;
    place: string;
  }[];
}) => {
  const classes = useStyles({
    bgColor: backgroundColor,
    height
  });
  return (
    <>
      {displayContent.map((item, index) => {
        return (
          <Grid
            key={index}
            container
            direction="row"
            className={classes.outerContainer}
          >
            <Grid item xs={true}>
              <Grid container direction="row">
                <Grid item className={classes.imageContainer}>
                  <img src={item.displayImage} alt="image" />
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="column"
                    className={classes.contentContainer}
                  >
                    <Grid item>ORDER#{item.orderId}</Grid>
                    <Grid item>
                      <Grid
                        style={{ display: 'flex' }}
                        justifyContent="space-between"
                        direction="row"
                      >
                        <Typography>Category:{item.category}</Typography>
                        <div style={{ marginLeft: 35 }}>
                          <img src={weightIcon} />
                          <span>{item.weight}</span>
                        </div>
                        <div style={{ marginLeft: 35 }}>
                          <img src={locationIcon} />
                          <span>{item.place}</span>
                        </div>
                      </Grid>
                    </Grid>
                    <Grid item className={classes.actionButtonsContainer}>
                      <ButtonComp
                        buttonText={'VIEW DETAILS'}
                        backgroundColor="#FCFCFC"
                        buttonFontSize={10}
                        variant="outlined"
                        buttonTextColor="#6CB044"
                        buttonFontWeight={500}
                        btnBorderRadius={8}
                        height={'30px'}
                        btnWidth={'150px'}
                        style={{ marginRight: 10 }}
                      />
                      <ButtonComp
                        buttonText={'CANCEL'}
                        buttonFontSize={10}
                        variant="contained"
                        buttonTextColor="#FFFFFF"
                        buttonFontWeight={500}
                        btnBorderRadius={8}
                        height={'30px'}
                        btnWidth={'72px'}
                      />
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
