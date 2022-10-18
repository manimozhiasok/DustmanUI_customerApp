import React, { useCallback } from 'react';
import { Grid, makeStyles, Theme } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import Card from '@material-ui/core/Card';
import SlotComp, { TimeSlotDetails } from 'src/components/slotComp';

const useStyles = makeStyles((theme: Theme) => {
  return {
    dialogPaper: {
      width: 847,
      height: 900,
      borderRadius: theme.MetricsSizes.regular
    },
    buttonStyle: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: theme.MetricsSizes.tiny_xxx
    },
    cardStyle: {
      boxShadow: '0px 8.93293px 26.7988px rgba(5, 16, 55, 0.1)'
    },
    heading: {
      fontFamily: 'DM Sans',
      fontSize: theme.MetricsSizes.small_xxx,
      color: theme.Colors.primary,
      padding: theme.spacing(1, 0),
      fontWeight: theme.fontWeight.bold
    },
    listItemStyle: {
      display: 'flex',
      alignItems: 'center'
    },
    containerStyle: {
      color: theme.Colors.blueDark,
      fontSize: theme.MetricsSizes.small_xxx,
      fontWeight: theme.fontWeight.regular,
      marginTop: theme.MetricsSizes.tiny_x
    },
    typoStyle: {
      color: theme.Colors.primary,
      fontWeight: theme.fontWeight.medium
    },
    calendarContainerStyle: {
      padding: theme.spacing(2, 0, 3, 0)
    }
  };
});

const ScheduleYourPickup = ({ edit }) => {
  const [pickupDate, setPickupDate] = useState(new Date());
  const [selectedSlotVal, setSelectedSlotVal] = useState<any>({});
  const classes = useStyles();

  const timeSlotDetails1 = [
    { id: 1, text: 'Morning', time: '9:00 AM  - 12:00 PM', value: 'morning' },
    { id: 2, text: 'Noon', time: '1:00 PM  - 4:00 PM', value: 'afternoon' },
    { id: 3, text: 'Evening', time: '4:00 PM  - 7:00 PM', value: 'evening' }
  ];

  const handleChangeSlot = (selectedSlot: TimeSlotDetails) => {
    setSelectedSlotVal(selectedSlot);
    console.log(selectedSlot);
  };

  const getRandomTime = useCallback(
    (start?: number, end?: number, slot?: string) => {
      if (!start || !end) {
        return;
      }
      let date = new Date(pickupDate);
      let hour = start + Math.random() * (end - start);
      date.setHours(hour);
      edit.update({
        customer_order_details: {
          ...edit.edits.customer_order_details,
          pickup_time: pickupDate.toJSON(),
          slot: slot
        }
      });
    },
    [pickupDate]
  );

  useEffect(() => {
    if (selectedSlotVal?.id === 1) {
      getRandomTime(9, 12, selectedSlotVal?.value);
    } else if (selectedSlotVal?.id === 2) {
      getRandomTime(13, 16, selectedSlotVal?.value);
    } else if (selectedSlotVal?.id === 3) {
      getRandomTime(16, 19, selectedSlotVal?.value);
    }
  }, [getRandomTime, selectedSlotVal]);

  return (
    <>
      <Grid container spacing={3} className={classes.calendarContainerStyle}>
        <Grid item xs={6}>
          <Card className={classes.cardStyle}>
            <Calendar
              onChange={setPickupDate}
              value={pickupDate}
              formatShortWeekday={(
                locale: any,

                value: { getDay: () => string | number }
              ) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][value.getDay()]}
              prev2Label={null}
              next2Label={null}
              defaultView="month"
              calendarType="US"
              minDate={new Date()}
              showNeighboringMonth={false}
            />
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="column">
            <Grid item xs={12} className={classes.heading}>
              Slot
            </Grid>
            <SlotComp
              timeSlotDetails={timeSlotDetails1}
              handleChangeSlot={handleChangeSlot}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ScheduleYourPickup;
