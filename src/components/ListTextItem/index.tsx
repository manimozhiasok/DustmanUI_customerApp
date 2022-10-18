import React, { useEffect } from 'react';
import {
  makeStyles,
  Theme,
  useTheme,
  Grid,
  Typography,
  Divider
} from '@material-ui/core';
import { FullscreenExit } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => {
  return {
    outerContainer: {
      paddingTop: theme.spacing(1)
    },
    mapStyle: {
      marginLeft: theme.spacing(6)
    },
    imgContainer: {
      paddingLeft: theme.spacing(1.6)
    }
  };
});

type Props = {
  image?: any;
  img?: any;
  value?: any;
  isDivider?: boolean;
  secImage?: any;
};

const ListTextItem = (props: Props) => {
  const { image, img, value, isDivider, secImage } = props;
  const theme = useTheme();
  const classes = useStyles();

  useEffect(() => {
    //api call to get data
  }, []);

  return (
    <>
      <Grid container spacing={1} className={classes.outerContainer}>
        {image && (
          <Grid item>
            <img src={image} />
          </Grid>
        )}
        <Grid item xs={9}>
          {value && <Typography variant="h4">{value}</Typography>}
          {img && (
            <Grid
              container
              className={classes.imgContainer}
              direction="row"
              spacing={5}
            >
              <Grid item xs={6}>
                {img}
              </Grid>
              <Grid item xs={6}>
                {secImage}
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default ListTextItem;
{
  /* {orderDetails.map((item: any, index: any) => {
        return (
          <>
            <Grid
              container
              spacing={1}
              key={index}
              className={classes.outerContainer}
            >
              <Grid item>
                <Grid container spacing={1}>
                  <Grid item>
                    <img src={MapPin} />
                  </Grid>
                  <Grid item>
                    <Typography variant="h4">{item.address}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container spacing={1}>
                  <Grid item>
                    <img src={Phone} />
                  </Grid>
                  <Grid item>
                    <Typography variant="h4">{item.phone}</Typography>
                  </Grid>
                  <Grid item className={classes.mapStyle}>
                    <img src={MapTrifold} />
                  </Grid>
                  <Grid item>
                    <Typography variant="h4">{item.map}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={1}>
                  <Grid item>
                    <img src={Scales} />
                  </Grid>
                  <Grid item>
                    <Typography variant="h4">{item.quantity}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container>
                  <Grid item>
                    <img src={Image} />
                  </Grid>
                  <Grid item>{item.image}</Grid>
                  <Grid item> {item.image1}</Grid>
                </Grid>
              </Grid>
            </Grid>
          </>
        );
      })}
     */
}
