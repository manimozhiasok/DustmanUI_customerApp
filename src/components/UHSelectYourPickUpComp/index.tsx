import { useCallback } from 'react';
import {
  Grid,
  makeStyles,
  Theme,
  Typography,
  useTheme
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Card from '@material-ui/core/Card';
import { SlotButtonComp } from 'src/components';
import { TimeSlotDetails } from 'src/components/SlotButtonComp';
import { useTranslation } from 'react-i18next';

type Props = {
  activeTileColor?: string;
};
const useStyles = makeStyles<Theme, Props>((theme) => {
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
    },
    calendar: {
      '&.react-calendar': {
        width: '100%',
        padding: theme.spacing(2),
        background: theme.Colors.white,
        border: 'none',
        borderRadius: theme.MetricsSizes.tiny_x
      },
      '& .react-calendar__tile--active, .react-calendar__tile--now:enabled:hover, .react-calendar__tile--now:enabled:focus, .react-calendar__tile--active:enabled:hover, .react-calendar__tile--active:enabled:focus':
        {
          background: (props) =>
            props.activeTileColor || theme.Colors.secondary,
          borderRadius: '5.35976px'
        },
      '& .react-calendar__tile:disabled': {
        color: theme.Colors.lightGrey,
        backgroundColor: 'transparent'
      },
      '& .react-calendar__month-view__weekdays': {
        textAlign: 'center',
        fontWeight: theme.fontWeight.mediumBold,
        fontSize: '14.29px',
        color: theme.Colors.slateBlueGrey
      },
      '& .react-calendar__tile--now': {
        background: theme.Colors.white
      },
      '& .react-calendar__month-view__days__day--weekend': {
        color: theme.Colors.blueBerry,
        fontSize: '14.2927px',
        lineHeight: '17px',
        textDecoration: 'none'
      },
      '& .react-calendar__navigation button:disabled': {
        color: theme.Colors.lightGrey,
        backgroundColor: 'transparent'
      },
      '& .react-calendar__navigation button': {
        fontWeight: 700,
        fontSize: '19.6524px',
        color: theme.Colors.primary
      },
      '& abbr[title]': {
        textDecoration: 'none !important'
      }
    }
  };
});

const UHSelectYourPickUpComp = ({
  updateSelectedDate,
  activeTileColor,
  activeButtonColor
}: {
  updateSelectedDate: (isoDateString: string, slot: string) => void;
  activeTileColor?: string;
  activeButtonColor?: string;
}) => {
  const [pickupDate, setPickupDate] = useState<any>(new Date());
  const [selectedSlotVal, setSelectedSlotVal] = useState<any>({});
  const classes = useStyles({ activeTileColor });
  const theme = useTheme();
  const { t } = useTranslation();

  const timeSlotDetails = [
    {
      id: 1,
      text: t('PICKUP.morning'),
      time: '9:00 AM  - 12:00 PM',
      value: 'morning'
    },
    {
      id: 2,
      text: t('PICKUP.noon'),
      time: '1:00 PM  - 4:00 PM',
      value: 'afternoon'
    },
    {
      id: 3,
      text: t('PICKUP.evening'),
      time: '4:00 PM  - 7:00 PM',
      value: 'evening'
    }
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
      updateSelectedDate(data.toISOString(), slot);
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
            minDate={new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)}
            maxDate= {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)}
            showNeighboringMonth={false}
            className={classes.calendar}
          />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Grid container direction="column">
          <Grid item xs={12}>
            <Typography className={classes.heading}>Slot</Typography>
          </Grid>
          <SlotButtonComp
            timeSlotDetails={timeSlotDetails}
            handleChangeSlot={handleChangeSlot}
            activeButtonColor={activeButtonColor}
            // activeButtonVal={edit.getValue('customer_order_details').slot}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UHSelectYourPickUpComp;
