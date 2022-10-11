import React from 'react';
import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
  useTheme
} from '@material-ui/core';
type Props = {
  dataContent: any[];
  onClick: () => void;
  isClicked: boolean;
};

const useStyles = makeStyles<Theme>((theme: Theme) =>
  createStyles({
    subText: {
      fontWeight: theme.fontWeight.regular,
      fontSize: theme.MetricsSizes.tiny_x,
      color: theme.Colors.blackGrey
    },
    heading: {
      fontSize: theme.MetricsSizes.small_x,
      fontWeight: theme.fontWeight.medium
    },
    topHeading: {
      fontWeight: theme.fontWeight.bold,
      fontSize: theme.MetricsSizes.small_xxx,
      color: theme.Colors.primary
    },
    subHeading: {
      fontWeight: theme.fontWeight.regular,
      fontSize: theme.MetricsSizes.small_xxx,
      color: theme.Colors.lightBlack
    },
    gridStyle: {
      margin: 5,
      background: theme.Colors.whiteGrey,
      borderRadius: '8px',
      width: 152,
      height: 82
    }
  })
);

function SelectVehicleType({
  dataContent,
  onClick
}: {
  dataContent: any[];
  onClick: () => void;
  isClicked?: boolean;
}) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="row" spacing={2}>
      <Grid item xs={12}>
        <Typography className={classes.subHeading}>
          What vehicle you think will be right fit to pick your trash
        </Typography>
      </Grid>
      {dataContent.map((item, index) => {
        return (
          <Grid
            item
            className={classes.gridStyle}
            key={index}
            onClick={onClick}
          >
            <Typography className={classes.heading}>{item.heading}</Typography>
            <Grid
              style={{ display: 'flex' }}
              justifyContent="space-between"
              direction="row"
            >
              <Typography className={classes.subText}>
                {item.subHeading}
              </Typography>

              <img
                src={item.image}
                width={68}
                height={45}
                style={{
                  background: theme.Colors.white,
                  borderRadius: 50,
                  padding: theme.spacing(0, 0)
                }}
              />
            </Grid>

            <Typography className={classes.subText}> {item.subText}</Typography>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default SelectVehicleType;