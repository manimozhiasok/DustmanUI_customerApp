import React, { useState } from 'react';
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
import { useEdit } from 'src/hooks/useEdit';
import { API_SERVICES } from 'src/Services';
import { HTTP_STATUSES } from 'src/Config/constant';
import toast from 'react-hot-toast';
import data from './CategoryData';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) => ({
  outerContainer: {}
}));

const initialValues = {
  quantity_kg: 20,
  order_items: [],
  description: 'dfghjskdfgfgvcf',
  order_images: [],
  order_address: {
    address_line1: 'address_line1',
    address_line2: 'address_line2',
    address_line3: 'address_line3',
    state: 'Tamil Nadu',
    city: 'Erode',
    pincode: '6200061',
    landmark: '',
    mobile_number: '9629629952',
    map_location: 'map_url'
  },
  customer_order_details: {
    vehicle_id: 1,
    pickup_time: '2022-09-13 10:59:10.414+05:30',
    slot: 'afternoon'
  }
};

function BookYourPickup() {
  const classes = useStyles();
  const theme = useTheme();
  const [selectedName, setSelectedName] = useState([]);
  const edit = useEdit(initialValues);

  console.log('edit.edits index', edit.edits);

  // const handleCreateData = async() => {
  //   try {
  //     let userData = { ...initialValues, ...edit.edits };
  //     const createUserRes: any =
  //       await API_SERVICES.customerService.create({
  //         data: userData,
  //         successMessage: 'customer created successfully!'
  //         //failureMessage: 'customer cannot create'
  //       });
  //     console.log(
  //       'createUserRes..........................................',
  //       createUserRes
  //     );
  //     // if (createUserRes?.status < HTTP_STATUSES.BAD_REQUEST) {
  //     //   updateData();
  //     //   onClose();
  //     // }
  //   } catch (err) {
  //     toast.error(err?.message);
  //   }
  // }

  const { t } = useTranslation();

  const bookYourPickupAccordionContent = [
    {
      summaryHeading: t('chooseCategory'),
      content: <ChooseCategory edit={edit} data={data} />,
      displayIcon: ChooseCategoryIcon
    },
    {
      summaryHeading: t('trashDetails'),
      content: <TrashDetails edit={edit} />,
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
      content: <PickupAddress edit={edit} />,
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
