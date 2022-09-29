import { useTheme, Grid } from '@material-ui/core';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import MainHeader from '../BaseLayout/MainHeader';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { BoxComp } from 'src/components';
import { ReactNode } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  rootMainContainer: {
   
  }
}));

interface HomePageLayoutProps {
  children?: ReactNode;
}

const HomePageLayout = ({children}:HomePageLayoutProps) => {
  const theme: Theme = useTheme();
  const styles = useStyles();

  return (
    <Grid>
      <MainHeader />
      <Grid className={styles.rootMainContainer}>
        <BoxComp>
        {children || <Outlet />}
        </BoxComp>
      </Grid> 
      <Footer />
    </Grid>
  );
};

export default HomePageLayout;