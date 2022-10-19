import React, { useState, useEffect } from 'react';
import { makeStyles, Theme, useTheme, Grid } from '@material-ui/core';
import ButtonComp from '../ButtonComp/index';
import { DateIcon, SunIcon } from 'src/Assets/Images';

export type TimeSlotDetails = {
  text: string;
  time: React.ReactNode;
  id: React.ReactText;
  value: string;
};

type Prop = {
  timeSlotDetails: TimeSlotDetails[];
  handleChangeSlot: (slot: TimeSlotDetails) => void;
  activeButtonVal: string;
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

const SlotButtonComp = (props: Prop) => {
  const { timeSlotDetails, handleChangeSlot, activeButtonVal } = props;
  const [activeButton, setActiveButton] = useState<any>(0);
  const theme = useTheme();
  const classes = useStyles();

  const handleClickSlot = (selectedSlot: TimeSlotDetails) => {
    handleChangeSlot(selectedSlot);
    setActiveButton(selectedSlot?.value);
  };

  useEffect(() => {
    setActiveButton(activeButtonVal);
  }, [activeButtonVal]);

  return (
    <Grid container direction="row">
      {timeSlotDetails.map((slot: TimeSlotDetails, index) => {
        return (
          <Grid item xs={4} key={index}>
            <ButtonComp
              buttonText={slot.text}
              buttonFontSize={theme.MetricsSizes.small_xx}
              btnWidth={100}
              buttonFontWeight={theme.fontWeight.regular}
              height={theme.MetricsSizes.large_x}
              backgroundColor={
                activeButton === slot.value
                  ? theme.Colors.secondary
                  : theme.Colors.lightWhiteGrey
              }
              buttonTextColor={
                activeButton === slot.value
                  ? theme.Colors.white
                  : theme.Colors.black
              }
              startIcon={
                <SunIcon
                  fontSize="small"
                  stroke={
                    activeButton === slot.value
                      ? theme.Colors.white
                      : theme.Colors.black
                  }
                />
              }
              onClickButton={() => handleClickSlot(slot)}
            />
            <Grid container className={classes.date}>
              <Grid item xs={2}>
                <DateIcon />
              </Grid>
              <Grid
                item
                xs={10}
                style={{
                  padding: 2,
                  fontSize: theme.MetricsSizes.tiny_xx,
                  fontWeight: theme.fontWeight.regular
                }}
              >
                {slot.time}
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SlotButtonComp;
