import {
  makeStyles,
  Theme,
  useTheme,
  Grid,
  Typography
} from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) => {
  return {
    leftContentStyle: {
      color:  '#808080',
      fontFamily: 'DM Sans',
      fontSize: 16,
      fontWeight: 400,
      marginBottom: theme.MetricsSizes.tiny_x
    },
    rightContainer: {
      color: '#343434',
      fontFamily: 'DM Sans',
      fontSize: 16,
      fontWeight: 500,
      marginBottom: theme.MetricsSizes.tiny_x
    },
    rightStyle:{
      marginLeft:theme.spacing(0.1)
    }
  };
});

type Props = { orderDetails: any[] };

const DialogOrderDetails = (props: Props) => {
  const { orderDetails } = props;
  const theme = useTheme();
  const classes = useStyles();
  return (
    <>
      {orderDetails.map((item: any, index: number) => {
        return (
          <Grid container xs={12} key={index}>
            <Grid item>
              <Typography variant="h4" className={classes.leftContentStyle}>
                {item.content}:
              </Typography>
            </Grid>     
            <Grid item className={classes.rightStyle}>
                <Typography variant="h4" className={classes.rightContainer}>
                  {item.value}
                </Typography>
                </Grid>    
            </Grid>
        );
      })}
    </>
  );
};

export default DialogOrderDetails;
