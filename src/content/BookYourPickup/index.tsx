import React, { useCallback, useEffect, useState } from 'react';
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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useTranslation } from 'react-i18next';
import ChooseCategoryComponent from './ChooseCategoryComponent';

const useStyles = makeStyles((theme: Theme) => ({
  outerContainer: {}
}));

export const initialValues = {
  quantity_kg: '',
  order_items: [],
  description: '',
  order_images: [],
  order_address: {
    address_line1: '',
    address_line2: '',
    address_line3: '',
    state: '',
    city: '',
    pincode: '',
    mobile_number: '',
    map_location: 'map_url'
  },
  customer_order_details: {
    vehicle_id: '',
    pickup_time: '',
    slot: ''
  }
};

function BookYourPickup() {
  const classes = useStyles();
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [trashData, setTrashData] = useState([]);
  const edit = useEdit(initialValues);
  const { t } = useTranslation();

  const handleCreateData = async () => {
    try {
      let userData = { ...initialValues, ...edit.edits };
      // const createUserRes: any =
      //   await API_SERVICES.customerCreateService.create({
      //     data: userData,
      //     successMessage: 'customer created successfully!'
      //     //failureMessage: 'customer cannot create'
      //   });
      // if (createUserRes?.status < HTTP_STATUSES.BAD_REQUEST) {
      //   updateData();
      //   onClose();
      // }
      console.log(
        userData,
        '_-------1111111111111111 final data 11111111---------'
      );
    } catch (err) {
      toast.error(err?.message);
    }
  };

  const fetchData = useCallback(async () => {
    try {
      const response: any =
        await API_SERVICES.customerCreateService.getAllTrashCategory(1, 1);
      if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
        if (response?.data) {
          setTrashData(response.data.categories);
        }
      }
    } catch (err) {
      toast.error(err?.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleTrashCatItems = (itemIds: any[]) => {
    edit.update({ order_items: itemIds });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const bookYourPickupAccordionContent = [
    {
      summaryHeading: t('chooseCategory'),
      content: (
        <ChooseCategoryComponent
          data={trashData}
          InitialItemVal={edit.getValue('order_items')}
          handleChangeItem={handleTrashCatItems}
        />
      ),
      displayIcon: ChooseCategoryIcon
    },
    {
      summaryHeading: t('trashDetails'),
      content: <TrashDetails edit={edit} trashData={trashData} />,
      displayIcon: TrashDetailsIcon
    },
    {
      summaryHeading: t('selectVehicle'),
      content: <SelectVehicle edit={edit} />,
      displayIcon: SelectVehicleIcon
    },
    {
      summaryHeading: t('scheduleYourPickup'),
      content: <ScheduleYourPickup edit={edit} />,
      displayIcon: ScheduleYourPickupIcon
    },
    {
      summaryHeading: t('pickupAddress'),
      content: <PickupAddress edit={edit} />,
      displayIcon: PickupAddressIcon
    },
    {
      summaryHeading: t('orderConfirmation'),
      content: (
        <OrderConfirmation
          edit={edit}
          handleButtonClick={handleCreateData}
          trashData={trashData}
        />
      ),
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
