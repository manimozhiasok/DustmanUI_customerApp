import React from 'react';
import { makeStyles, Theme, useTheme, Grid } from '@material-ui/core';
import ButtonComp from '../../components/ButtonComp/index';
import { DateIcon, SunIcon } from 'src/Assets/Images';

type Prop = {
  timeSlotDetails: any;
  activeButtonId: any;
  handleClick: any;
};

const useStyles = makeStyles((theme: Theme) => {
  return {
    buttonContainer: {
      padding: theme.spacing(2, 0)
    },

    date: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontSize: theme.MetricsSizes.tiny_xx,
      padding: theme.spacing(1, 0)
    }
  };
});

const Slot = (props: Prop) => {
  const { timeSlotDetails, activeButtonId, handleClick } = props;

  const theme = useTheme();
  const classes = useStyles();
  return (
    <Grid container direction="row">
      {timeSlotDetails.map(
        (
          slot: {
            text: string;
            time:
              | boolean
              | React.ReactChild
              | React.ReactFragment
              | React.ReactPortal;
          },
          index: string
        ) => {
          {
            console.log('slotgrid', slot);
          }
          return(
            <>
          <Grid item xs={4}>
            <ButtonComp
              id={index}
              buttonText={slot.text}
              buttonFontSize={theme.MetricsSizes.small_xx}
              btnWidth={100}
              buttonFontWeight={theme.fontWeight.regular}
              height={theme.MetricsSizes.large_x}
              backgroundColor={
                activeButtonId === index
                  ? theme.Colors.secondary
                  : theme.Colors.lightWhiteGrey
              }
              buttonTextColor={
                activeButtonId === index
                  ? theme.Colors.white
                  : theme.Colors.black
              }
              startIcon={
                <SunIcon
                  fontSize="small"
                  stroke={
                    activeButtonId === index
                      ? theme.Colors.white
                      : theme.Colors.black
                  }
                />
              }
              onClickButton={(e) => handleClick(e, index)}
            />
            <div className={classes.date}>
              <Grid container>
                <Grid item xs={2}>
                  <DateIcon />
                </Grid>
                <Grid item xs={10} style={{ padding: 2, fontSize:theme.MetricsSizes.tiny_xx, fontWeight:theme.fontWeight.regular }}>
                  {slot.time}
                </Grid>
              </Grid>
            </div>
          </Grid>
          </>
          )
        }
      )}
    </Grid>
  );
};

export default Slot;
