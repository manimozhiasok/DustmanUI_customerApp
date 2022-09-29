import React, { useContext, useEffect, useState } from 'react';
import { Box, Grid, Typography, useTheme } from '@material-ui/core';
import { Helmet } from 'react-helmet-async';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { ButtonComp, Loader } from 'src/components';
import CloseIcon from '@material-ui/icons/Close';
import { LoginDrawerContext } from 'src/contexts/LoginDrawerContext';
import { useNavigate } from 'react-router';


const useStyles = makeStyles((theme: Theme) => ({


    loginDrawerStyle:{
      padding: theme.spacing(4,4,4,4),
      width:'45vw'
    },
    loginContentContainer:{
      padding: theme.spacing(4,4,4,4),
      width: "90%",
      
    },
    loginHeadingStyle: {
      color: theme.Colors.primary,
      fontSize: theme.MetricsSizes.large_x,
      fontWeight: theme.fontWeight.bold,
      
      
    }

}));

function Login() {
  const classes = useStyles();
  const theme: Theme = useTheme();
  const [loading, setLoading] = useState(true);
  const navigateTo = useNavigate();
  const { isLoginDrawerOpen, closeLoginDrawer } = useContext(LoginDrawerContext);
  useEffect(() => {
    setLoading(false);
  }, []);
 
  const handleCustomerLoginButtonClick = () => {
    navigateTo('/homepage/customer-info', { replace: true });
  };


  if (loading) {
    return <Loader />;
  } else {
    return (
      <Box className={classes.loginDrawerStyle}>
        <CloseIcon onClick={()=>closeLoginDrawer()} fontSize="medium" />
        
        <Box className={classes.loginContentContainer}>
          <Typography className={classes.loginHeadingStyle}>Login</Typography> 
          <ButtonComp       
            buttonText='Login'
            height={theme.spacing(6)}
            btnWidth={'100%'}  
            backgroundColor={theme.Colors.secondary}
            btnBorderRadius={theme.MetricsSizes.tiny}     
            onClickButton={handleCustomerLoginButtonClick}
          >
          </ButtonComp>
        </Box>
      </Box>
    );
  }
}

export default Login;
