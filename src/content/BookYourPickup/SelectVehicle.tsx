import React from 'react';
import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
  useTheme
} from '@material-ui/core';
import { bike } from 'src/Assets';
import { vehicleImage } from 'src/Assets';

const useStyles = makeStyles<Theme>((theme: Theme) =>
  createStyles({
    subText: {
      fontWeight: 400,
      fontSize: '6.18299px',
      color: '#7B6F72'
    },
    heading: {
      fontSize: '12px',
      fontWeight: 500
    }
  })
);

function SelectVehicle() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="row" spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2">Select Vehicle</Typography>
        <Typography variant="h4">
          What vehicle you think will be right fit to pick your trash
        </Typography>
      </Grid>
      <Grid
        item
        xs={2}
        style={{ margin: 15, background: '#EFEFEF', borderRadius: '8px' }}

        // style={{ background: '#EFEFEF', borderRadius: '8px' }}
      >
        <Typography className={classes.heading}>Two Wheeler</Typography>
        <Grid
          style={{ display: 'flex' }}
          justifyContent="space-between"
          direction="row"
        >
          <Typography className={classes.subText}>Vehicle Type</Typography>

          <img
            src={bike}
            width={68}
            height={45}
            //style={{ marginTop: 10 }}
          />
        </Grid>

        <Typography className={classes.subText}>
          {' '}
          *Kindly arrange parking
        </Typography>
      </Grid>

      <Grid
        item
        xs={2}
        style={{ margin: 15, background: '#EFEFEF', borderRadius: '8px' }}
      >
        <Typography className={classes.heading}>Three Wheeler</Typography>
        <Grid
          style={{ display: 'flex' }}
          justifyContent="space-between"
          direction="row"
        >
          <Typography className={classes.subText}>Tri Cycle</Typography>

          <img
            src={vehicleImage}
            width={68}
            height={45}
            //style={{ marginTop: 10 }}
          />
        </Grid>
        <Typography className={classes.subText}>
          {' '}
          *Kindly arrange parking
        </Typography>
      </Grid>

      <Grid
        item
        xs={2}
        style={{ margin: 15, background: '#EFEFEF', borderRadius: '8px' }}
      >
        <Typography className={classes.heading}>Four Wheeler</Typography>
        <Grid
          style={{ display: 'flex' }}
          justifyContent="space-between"
          direction="row"
        >
          <Typography className={classes.subText}>Mini Truck</Typography>

          <img
            src={vehicleImage}
            width={68}
            height={45}
            //style={{ marginTop: 10 }}
          />
        </Grid>

        <Typography className={classes.subText}>
          {' '}
          *Kindly arrange parking
        </Typography>
      </Grid>

      <Grid
        item
        xs={2}
        style={{ margin: 15, background: '#EFEFEF', borderRadius: '8px' }}
      >
        <Typography className={classes.heading}>Four Wheeler</Typography>
        <Grid
          style={{ display: 'flex' }}
          justifyContent="space-between"
          direction="row"
        >
          <Typography className={classes.subText}>Tempo</Typography>
          <img
            src={vehicleImage}
            width={68}
            height={45}
            //style={{ marginTop: 10 }}
          />
        </Grid>

        <Typography className={classes.subText}>
          {' '}
          *Kindly arrange parking
        </Typography>
      </Grid>

      <Grid
        item
        xs={2}
        style={{ margin: 15, background: '#EFEFEF', borderRadius: '8px' }}
      >
        <Typography className={classes.heading}>Four Wheeler</Typography>
        <Grid
          style={{ display: 'flex' }}
          justifyContent="space-between"
          direction="row"
        >
          <Typography className={classes.subText}> Tipper Lorry</Typography>

          <img
            src={vehicleImage}
            width={68}
            height={45}
            //style={{ marginTop: 10, position: 'relative' }}
          />
        </Grid>

        <Typography className={classes.subText}>
          {' '}
          *Kindly arrange parking
        </Typography>
      </Grid>
    </Grid>
  );
}

export default SelectVehicle;
