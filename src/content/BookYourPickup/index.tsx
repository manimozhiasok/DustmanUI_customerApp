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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) => ({
  outerContainer: {}
}));

function BookYourPickup() {
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation();

  const bookYourPickupAccordionContent = [
    {
      summaryHeading: t('chooseCategory'),
      content: <ChooseCategory />,
      displayIcon: ChooseCategoryIcon
    },
    {
      summaryHeading: t('trashDetails'),
      content: <TrashDetails />,
      displayIcon: TrashDetailsIcon
    },
    {
      summaryHeading: t('selectVehicle'),
      content: <SelectVehicle />,
      displayIcon: SelectVehicleIcon
    },
    {
      summaryHeading: t('scheduleYourPickup'),
      content: <ScheduleYourPickup />,
      displayIcon: ScheduleYourPickupIcon
    },
    {
      summaryHeading: t('pickupAddress'),
      content: <PickupAddress />,
      displayIcon: PickupAddressIcon
    },
    {
      summaryHeading: t('orderConfirmation'),
      content: <OrderConfirmation />,
      displayIcon: OrderConfirmationIcon
    },
    {
      summaryHeading: t('orderSuccess'),
      content: <OrderSuccess />,
      displayIcon: OrderSuccessIcon
    }
  ];

  return (
    <Grid className={classes.outerContainer}>
      <AccordionComponent
        displayContent={bookYourPickupAccordionContent}
        summaryPadding={theme.spacing(4.25, 6.5)}
        summaryMargin={theme.spacing(2.5, 0)}
        expandMoreIcon={<ExpandMoreIcon />}
      />
    </Grid>
  );
}

export default BookYourPickup;
