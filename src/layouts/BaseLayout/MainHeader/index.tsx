import { useTheme, Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import zIndex from '@material-ui/core/styles/zIndex';
import HeaderLeftContent from './HeaderLeftContent';
import HeaderRightContent from './HeaderRightContent';

const useStyles = makeStyles((theme: Theme) => ({
  headerContainer: {
    height: theme.spacing(11.5),
    position: 'sticky',
    zIndex: 2,
    top: 0,
    background: theme.Colors.whitePure
  },
  leftContainer: {
    width: '43%'
  },
  rightContainer: {
    width: '57%'
  }
}));

const MainHeader = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    // <Grid container direction="row" className={classes.headerContainer}>
    //   <Grid item className={classes.leftContainer}>
    //     <HeaderLeftContent />
    //   </Grid>
    //   <Grid item className={classes.rightContainer}>
    //     <HeaderRightContent />
    //   </Grid>
    // </Grid>
    <HeaderRightContent />
  );
};

export default MainHeader;
