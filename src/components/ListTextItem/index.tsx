import React, { useEffect } from 'react';
import {
  makeStyles,
  Theme,
  useTheme,
  Grid,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
  return {
    outerContainer: {
      marginTop: theme.spacing(1.75)
    },
    imgContainer: {
      paddingLeft: theme.spacing(1.6)
    },
    valueStyle: {
      marginLeft: theme.spacing(2.4)
    }
  };
});

type Props = {
  icon?: any;
  firstImg?: any;
  value?: string;
  secImage?: any;
};

const ListTextItem = (props: Props) => {
  const { icon, firstImg, value, secImage } = props;
  const classes = useStyles();

  useEffect(() => {
    //api call to get data
  }, []);

  return (
    <Grid container className={classes.outerContainer}>
      {icon && (
        <Grid item>
          <img src={icon} />
        </Grid>
      )}
      <Grid item xs className={classes.valueStyle}>
        {value && <Typography variant="h5">{value}</Typography>}
        {firstImg && (
          <Grid
            container
            className={classes.imgContainer}
            direction="row"
            spacing={2}
          >
            <Grid item>{firstImg}</Grid>
            <Grid item>{secImage}</Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default ListTextItem;
