import React, { useEffect, useState } from 'react';
import { Theme , useTheme} from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme: Theme) => ({
 
}));

function Profile() {
  const styles = useStyles();
  const theme: Theme = useTheme();

  return (
      <>
        Profile Page
      </>
    );

}

export default Profile;
