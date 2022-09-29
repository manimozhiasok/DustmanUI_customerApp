import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { Box, Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import MainHeader from './MainHeader';
import LandingPage from 'src/content/LandingPage';
interface BaseLayoutProps {
  children?: ReactNode;
}


const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
      //height: '100vh',  

  },
  headerContainer: {
    height: theme.spacing(11.5),
    position: 'sticky',
    top: 0,
  },
  landingPageContentContainer: {
    backgroundImage: 'linear-gradient(150deg, #FFFFFF 8.53%, #70B245 200%)',
    zIndex: -1,
  },
}));

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {

  const theme: Theme = useTheme();
  const classes = useStyles();

  return (

        <Box
      sx={{
        flex: 1,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <MainHeader />
      {children || <Outlet />}    

    </Box>

  );
};

BaseLayout.propTypes = {
  children: PropTypes.node
};

export default BaseLayout;
