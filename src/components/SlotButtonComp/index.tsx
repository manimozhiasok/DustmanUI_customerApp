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
};

const useStyles = makeStyles((theme: Theme) => {
  return {
    buttonContainer: {
      padding: theme.spacing(2, 0)
    }
  };
});

const SlotButtonComp = (props: Prop) => {
  const { timeSlotDetails, handleChangeSlot } = props;
  const [activeButton, setActiveButton] = useState<any>(0);
  const theme = useTheme();
  const classes = useStyles();

  const handleClickSlot = (selectedSlot: TimeSlotDetails) => {
    handleChangeSlot(selectedSlot);
    setActiveButton(selectedSlot?.id);
  };

  return (
    <Grid container direction="row">
      {timeSlotDetails.map((slot: TimeSlotDetails, index) => {
        return (
          <Grid item xs key={index}>
            <ButtonComp
              buttonText={slot.text}
              buttonFontSize={theme.MetricsSizes.small_xx}
              btnWidth={100}
              buttonFontWeight={theme.fontWeight.regular}
              height={theme.MetricsSizes.large_x}
              backgroundColor={
                activeButton === slot.id
                  ? theme.Colors.secondary
                  : theme.Colors.lightWhiteGrey
              }
              buttonTextColor={
                activeButton === slot.id
                  ? theme.Colors.white
                  : theme.Colors.black
              }
              startIcon={
                <SunIcon
                  fontSize="small"
                  stroke={
                    activeButton === slot.id
                      ? theme.Colors.white
                      : theme.Colors.black
                  }
                />
              }
              onClickButton={() => handleClickSlot(slot)}
            />
            <Grid
              container
              direction="row"
              alignItems="center"
              style={{ marginTop: theme.spacing(1) }}
            >
              <Grid item style={{ paddingTop: theme.MetricsSizes.tiny }}>
                <DateIcon />
              </Grid>
              <Grid
                item
                style={{
                  fontSize: theme.MetricsSizes.tiny_xx,
                  fontWeight: theme.fontWeight.regular,
                  marginLeft: theme.MetricsSizes.tiny + 1
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
