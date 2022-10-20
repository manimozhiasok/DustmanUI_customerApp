import { useCallback } from 'react';
import { Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import Card from '@material-ui/core/Card';
import { SlotButtonComp } from 'src/components';
import { TimeSlotDetails } from 'src/components/SlotButtonComp';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) => {
  return {
    cardStyle: {
      boxShadow: '0px 8.93293px 26.7988px rgba(5, 16, 55, 0.1)'
    },
    heading: {
      fontSize: theme.MetricsSizes.small_xxx,
      color: theme.Colors.primary,
      padding: theme.spacing(1, 0),
      fontWeight: theme.fontWeight.bold
    },
    calendarContainerStyle: {
      padding: theme.spacing(2, 0, 3, 0)
    }
  };
});

const ScheduleYourPickup = ({ edit }) => {
  const [pickupDate, setPickupDate] = useState<any>(new Date());
  const [selectedSlotVal, setSelectedSlotVal] = useState<any>({});
  const classes = useStyles();
  const { t } = useTranslation();

  const timeSlotDetails1 = [
    { id: 1, text: t('PICKUP.morning'), time: '9:00 AM  - 12:00 PM', value: 'morning' },
    { id: 2, text: t('PICKUP.noon'), time: '1:00 PM  - 4:00 PM', value: 'afternoon' },
    { id: 3, text: t('PICKUP.evening'), time: '4:00 PM  - 7:00 PM', value: 'evening' }
  ];

  const handleChangeSlot = (selectedSlot: TimeSlotDetails) => {
    setSelectedSlotVal(selectedSlot);
  };

  const getRandomTime = useCallback(
    (start?: number, end?: number, slot?: string) => {
      if (!start || !end) {
        return;
      }
      let initialDate = pickupDate.toISOString();
      let data = new Date(initialDate);
      let hour = start + Math.random() * (end - start);
      data.setHours(hour);
      edit.update({
        customer_order_details: {
          ...edit.edits.customer_order_details,
          pickup_time: data.toISOString(),
          slot: slot
        }
      });
    },
    [selectedSlotVal, pickupDate]
  );

  useEffect(() => {
    if (selectedSlotVal?.id === 1) {
      getRandomTime(9, 12, selectedSlotVal?.value);
    } else if (selectedSlotVal?.id === 2) {
      getRandomTime(13, 16, selectedSlotVal?.value);
    } else if (selectedSlotVal?.id === 3) {
      getRandomTime(16, 19, selectedSlotVal?.value);
    }
  }, [getRandomTime]);

  return (
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
          <Grid item xs={12}>
            <Typography className={classes.heading}>Slot</Typography>
          </Grid>
          <SlotButtonComp
            timeSlotDetails={timeSlotDetails1}
            handleChangeSlot={handleChangeSlot}
            activeButtonVal={edit.getValue('customer_order_details').slot}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ScheduleYourPickup;
