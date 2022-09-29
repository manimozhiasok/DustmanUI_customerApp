import React, { useEffect, useState } from 'react';
import { Box, Grid, useTheme } from '@material-ui/core';
import { Helmet } from 'react-helmet-async';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { ButtonComp, Loader } from 'src/components';

const useStyles = makeStyles((theme: Theme) => ({


    loginDrawerStyle:{
      padding: theme.spacing(4,35,4,35),
    }

}));

function Login() {
  const classes = useStyles();
  const theme: Theme = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <Box className={classes.loginDrawerStyle}>
        Login Page goes here
        <ButtonComp       
          buttonText='Login'
          height={theme.spacing(6)}
          btnWidth={theme.spacing(21)}  
          backgroundColor={theme.Colors.primary}
          btnBorderRadius={theme.MetricsSizes.tiny}     
          //onClickButton={handleCustomerLoginButtonClick}
        >
          </ButtonComp>
      </Box>
    );
  }
}

export default Login;
