import React from 'react';
import { Grid, makeStyles, Theme} from '@material-ui/core';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import Card from '@material-ui/core/Card';
import Slot from './Slot';

const useStyles = makeStyles((theme: Theme) => {
  return {
    
    dialogPaper: {
      width: 847,
      height: 900,
      padding: theme.spacing(2, 2, 2, 5),
      borderRadius: theme.MetricsSizes.regular
    },
    buttonStyle: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: theme.MetricsSizes.tiny_xxx
    },
    cardStyle: {
      boxShadow: '0px 8.93293px 26.7988px rgba(5, 16, 55, 0.1)',
      padding:theme.spacing(0, 0, 0, 0)
    },
    heading: {
      fontFamily: 'DM Sans',
      fontSize: theme.MetricsSizes.small_xxx,
      color: theme.Colors.primary,
      padding: theme.spacing(1, 0),
      fontWeight: theme.fontWeight.bold
    },
    listItemStyle:{
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(2, 0)
    },
    containerStyle:{
      color: theme.Colors.blueDark,
      fontSize: theme.MetricsSizes.small_xxx,
      fontWeight: theme.fontWeight.regular,
      marginTop: theme.MetricsSizes.tiny_x
    },
    typoStyle:{
      color: theme.Colors.primary,
      fontWeight: theme.fontWeight.medium
    },
    calendarContainerStyle:{
      padding: theme.spacing(2, 0, 10, 7) 
    }
  };
});



const ScheduleYourPickup = () => {
  const [value, onChange] = useState(new Date());
  const [activeButtonId, setActiveButtonId] = useState<string>('2');
  const classes = useStyles();

  const timeSlotDetails = [
    { id: 1, text: 'Morning', time: '9:00 AM  - 12:00 PM' },
    { id: 2, text: 'Noon', time: '1:00 PM  - 4:00 PM' },
    { id: 3, text: 'Evening', time: '4:00 PM  - 7:00 PM' }
  ];

  // const toCalendarType = (weekStartDay: number) =>{
  //         // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  //         weekStartDay === 1? 'en-US' : 'ISO 8601'
  // }

  const handleClick = (e: any, id: string) => {
    console.log('event', e.target.id);
    setActiveButtonId(id);
  };



  
  useEffect(() => {
    //api call to get data
  }, []);

    
    return (
      <>
        <Grid
          container
          spacing={3}
          className={classes.calendarContainerStyle}>
          <Grid item xs={5}>
            <Card className={classes.cardStyle}>
              <Calendar
                onChange={onChange}
                value={value}
                formatShortWeekday={(
                  locale: any,
                  value: { getDay: () => string | number }
                ) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][value.getDay()]}      
                prev2Label={null}
                next2Label={null}
                defaultView="month"
                calendarType="US"
              />
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Grid container direction="column">
              <Grid item xs={12} className={classes.heading}>
                Slot
              </Grid>

              <Slot
                timeSlotDetails={timeSlotDetails}
                activeButtonId={activeButtonId}
                handleClick={handleClick}
              />
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  };




export default ScheduleYourPickup;
