import React, { useEffect, useState } from 'react';
import { Box, Grid, useTheme } from '@material-ui/core';
import { Helmet } from 'react-helmet-async';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { Loader } from 'src/components';

const useStyles = makeStyles((theme: Theme) => ({

}));

function Login() {
  const styles = useStyles();
  const theme: Theme = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <>
      Login Page goes here
      </>
    );
  }
}

export default Login;
