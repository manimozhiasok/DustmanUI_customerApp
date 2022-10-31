import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { Box, makeStyles, Theme, useTheme } from '@material-ui/core';
import Footer from './Footer';
import NavBar from './NavBar';
interface BaseLayoutProps {
  children?: ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
  drawerWidth: {
    width: '520px'
  }
}));

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <>
      <Box
        sx={{
          flex: 1,
          // height: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <NavBar />
        {children || <Outlet />}
        <Footer />
      </Box>
    </>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node
};

export default BaseLayout;
