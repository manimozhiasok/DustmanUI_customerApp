import React, { useEffect } from 'react';
import {
  makeStyles,
  Theme,
  useTheme,
  Grid,
  Typography,
  Divider
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
  return {
    outerContainer: {
      // padding: theme.spacing(1.5, 0, 0, 0)
    },
    mapStyle: {
      marginLeft: theme.spacing(6)
    }
  };
});

type Props = {
  image?: any;
  img?: any;
  value?: any;
  isDivider?: boolean;
};

const ListTextItem = (props: Props) => {
  const { image, img, value, isDivider } = props;
  const theme = useTheme();
  const classes = useStyles();

  useEffect(() => {
    //api call to get data
  }, []);

  return (
    <>
      <Grid container spacing={1}>
        {image && (
          <Grid item>
            <img src={image} />
          </Grid>
        )}
        <Grid item>{value && <Typography variant='h4'>{value}</Typography>}</Grid>
        {img && (
          <Grid item>
             {img}
          </Grid>
        )}
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