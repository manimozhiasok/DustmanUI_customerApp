import { useEffect } from 'react';
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
      padding: theme.spacing(1.5, 0, 0, 0)
    },
    mapStyle: {
      paddingLeft: theme.spacing(5)
    },
  };
});

type Props = {
  // rightContent: any;
  orderDetails: any;
};

const ModalComp = (props: Props) => {
  const { orderDetails } = props;
  const theme = useTheme();
  const classes = useStyles();

  useEffect(() => {
    //api call to get data
  }, []);

  return (
    <>
      {orderDetails.map((item: any, index: any) => {
        return (
          <>
            <Grid
              container
              spacing={1}
              key={index}
              direction="row"
              className={classes.outerContainer}
            >
              <Grid item>{item.title}</Grid>
              <Grid item>
                    <Typography variant="h4">{item.value}{item.img}</Typography>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  spacing={1}
                  className={classes.mapStyle}
                >
                  <Grid item>{item.title1}</Grid>
                  <Grid item>
                    <Typography variant="h4">{item.value1}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </>
        );
      })}
    </>
  );
};
export default ModalComp;
