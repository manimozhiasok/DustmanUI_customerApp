import React from 'react';
import { Theme, useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { AccordionComponent } from 'src/components';
import { Grid } from '@material-ui/core';
import { ChooseCategoryIcon } from 'src/Assets/Images';
import { TrashDetailsIcon } from 'src/Assets/Images';
import { SelectVehicleIcon } from 'src/Assets/Images';
import { ScheduleYourPickupIcon } from 'src/Assets/Images';
import { PickupAddressIcon } from 'src/Assets/Images';
import { OrderConfirmationIcon } from 'src/Assets/Images';
import { OrderSuccessIcon } from 'src/Assets/Images';
import ChooseCategory from './ChooseCategory';
import TrashDetails from './TrashDetails';
import SelectVehicle from './SelectVehicle';
import ScheduleYourPickup from './ScheduleYourPickup';
import PickupAddress from './PickupAddress';
import OrderConfirmation from './OrderConfirmation';
import OrderSuccess from './OrderSuccess';

const useStyles = makeStyles((theme: Theme) => ({
  outerContainer: {}
}));

function BookYourPickup() {
  const classes = useStyles();
  const theme = useTheme();

  const bookYourPickupAccordionContent = [
    {
      summaryHeading: 'Choose Category',
      content: <ChooseCategory />,
      displayIcon: ChooseCategoryIcon
    },
    {
      summaryHeading: 'Trash Details',
      content: <TrashDetails />,
      displayIcon: TrashDetailsIcon
    },
    {
      summaryHeading: 'Select Vehicle',
      content: <SelectVehicle />,
      displayIcon: SelectVehicleIcon
    },
    {
      summaryHeading: 'Schedule Your Pickup',
      content: <ScheduleYourPickup />,
      displayIcon: ScheduleYourPickupIcon
    },
    {
      summaryHeading: 'Pickup Address',
      content: <PickupAddress />,
      displayIcon: PickupAddressIcon
    },
    {
      summaryHeading: 'Order Confirmation',
      content: <OrderConfirmation />,
      displayIcon: OrderConfirmationIcon
    },
    {
      summaryHeading: 'Order Success',
      content: <OrderSuccess />,
      displayIcon: OrderSuccessIcon
    }
  ];

  return (
    <Grid className={classes.outerContainer}>
      <AccordionComponent displayContent={bookYourPickupAccordionContent} />
    </Grid>
  );
}

export default BookYourPickup;
