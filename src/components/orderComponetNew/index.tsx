import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography
} from '@material-ui/core';
import React from 'react';
import { Aluminium, locationIcon, weightIcon } from 'src/Assets';
import ButtonComp from '../ButtonComp';
import OrderListingComponent from '../OrderListingComponent';

const useStyles = makeStyles<Theme>((theme: Theme) =>
  createStyles({
    outerContainer: {
      border: '0.5px solid',
      borderColor: theme.Colors.greyDark,
      width: '100%',
      marginBottom: theme.spacing(3),
      padding: theme.spacing(3.1, 2, 3.8, 2.9)
    },
    contentContainer: {
      height: '100%',
      justifyContent: 'space-evenly'
    },
    imageContainer: { padding: theme.spacing(0, 2, 0, 0) }
  })
);

const OrderComponentNew = ({ orderComponent }: { orderComponent: any[] }) => {
  const classes = useStyles();
  return (
    <>
      {orderComponent.map((item, index) => {
        return (
          <Grid
            container
            className={classes.outerContainer}
            direction="row"
            key={index}
          >
            <Grid item xs={true}>
              <Grid container direction="row">
                <Grid item className={classes.imageContainer}>
                  <img src={item.displayImage} alt="image" />
                </Grid>
                <Grid item className={classes.contentContainer}>
                  <Typography style={{ fontSize: 10 }}>
                    ORDER#:{item.orderId}
                  </Typography>
                  <Grid direction="row" style={{ display: 'flex' }}>
                    <Typography style={{ fontSize: 12 }}>
                      Category :{item.category}
                    </Typography>
                    <div style={{ paddingLeft: 55, fontSize: 10 }}>
                      <img src={weightIcon} />
                      {item.weight}
                    </div>
                    <div style={{ paddingLeft: 55, fontSize: 10 }}>
                      <img src={locationIcon} />
                      {item.place}
                    </div>
                  </Grid>
                  <Grid
                    item
                    style={{ display: 'flex', paddingTop: 25 }}
                    xs={12}
                  >
                    <ButtonComp
                      buttonText={'View Details'}
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
            <Grid item>
              <Typography style={{ fontSize: 10 }}>Status</Typography>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};
export default OrderComponentNew;
