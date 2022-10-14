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
      <Grid container spacing={1} alignItems="center" justifyContent="center">
        {image && (
          <Grid item>
            <img src={image} />
          </Grid>
        )}
        <Grid item>
          {value && <Typography style={{ fontSize: 10 }}>{value}</Typography>}
        </Grid>
        {/* {img && <Grid item>{img}</Grid>}
        <Grid item xs={12}>
          {isDivider && <Divider variant="middle" />}
        </Grid> */}
      </Grid>
    </>
  );
};

export default ListTextItem;
