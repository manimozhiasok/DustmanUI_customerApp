import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography
} from '@material-ui/core';
import React from 'react';
import { Aluminium, locationIcon, weightIcon } from 'src/Assets';
import ButtonComp from '../ButtonComp';

const useStyles = makeStyles<Theme>((theme: Theme) => createStyles({}));

const orderComponentNew = () => {
  return (
    <>
      <Grid container>
        <Grid item container>
          <Grid item>
            <img src={Aluminium} />
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item>
            <Typography>Order# :</Typography>
          </Grid>
          <Grid item>
            <Typography>Category:</Typography>
            <img src={weightIcon} />
            <span>25kg</span>
            <img src={locationIcon} />
            <span>Ambattur</span>
          </Grid>
          <Grid item>
            <ButtonComp buttonText={'View Details'}></ButtonComp>
            <ButtonComp buttonText={'cancel'}></ButtonComp>
          </Grid>
        </Grid>
        <Grid item>
          <Typography>Status</Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default orderComponentNew;
