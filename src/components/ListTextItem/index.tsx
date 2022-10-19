import React, { useEffect } from 'react';
import {
  makeStyles,
  Theme,
  useTheme,
  Grid,
  Typography,
} from '@material-ui/core';

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
    },
    valueStyle:{
      paddingLeft:20,
      fontSize: theme.MetricsSizes.regular
    }
  };
});

type Props = {
  image?: any;
  img?: any;
  value?: any;
  secImage?: any;
};

const ListTextItem = (props: Props) => {
  const { image, img, value, secImage } = props;
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
          {value && <Typography variant="h4" className={classes.valueStyle}>{value}</Typography>}
          {img && (
            <Grid
              container
              className={classes.imgContainer}
              direction="row"
              spacing={8}
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


