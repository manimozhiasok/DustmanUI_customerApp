import React, { useCallback, useEffect, useState } from 'react';
import { Theme, useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { AccordionComponent, Loader } from 'src/components';
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
import {
  HTTP_STATUSES,
  TRASH_CATEGORY_ID,
  USER_TYPE_ID
} from 'src/Config/constant';
import toast from 'react-hot-toast';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useTranslation } from 'react-i18next';
import ChooseCategoryComponent from './ChooseCategoryComponent';
import useUserInfo from 'src/hooks/useUserInfo';
import PickupPlace from './PickupPlace';
// import PickupAddressModal from './PickupAddressModal';

const useStyles = makeStyles((theme: Theme) => ({}));

export const initialValues = {
  quantity_kg: '',
  order_items: [],
  description: '',
  order_images: [],
  order_address_id: '',
  customer_order_details: {
    vehicle_id: 0,
    pickup_time: '',
    slot: ''
  }
};

function BookMyPickup() {
  const classes = useStyles();
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [trashData, setTrashData] = useState([]);
  const edit = useEdit(initialValues);
  const { t } = useTranslation();
  const { userDetails } = useUserInfo();

  // const pickAddressFields = [
  //   'address_line1',
  //   'address_line2',
  //   'address_line3',
  //   'state',
  //   'city',
  //   'pincode',
  //   'mobile_number'
  // ];

  const handleCreateCustomerOrder = async () => {
    try {
      // if (!edit.allFilled(...pickAddressFields)) {
      //   return toast.error('Please Fill all the pickup address details');
      // }
      let orderData = { ...initialValues, ...edit.edits };
      const createUserRes: any =
        await API_SERVICES.vendorPickupDropService.create(
          userDetails?.vendor_id,
          {
            data: orderData,
            successMessage: 'Customer order created successfully!',
            failureMessage: 'Failed to create Customer order '
          }
        );
      if (createUserRes?.status < HTTP_STATUSES.BAD_REQUEST) {
        edit.reset();
      }
    } catch (err) {
      toast.error(err?.message);
    }
  };

  const fetchData = useCallback(async () => {
    try {
      const response: any =
        await API_SERVICES.vendorPickupDropService.getAllTrashCategory(
          TRASH_CATEGORY_ID.vendorPickupTrash,
          USER_TYPE_ID.vendorPickup
        );
      if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
        if (response?.data?.categories) {
          setTrashData(response.data.categories);
        }
      }
    } catch (err) {
      toast.error(err?.message);
    } finally {
      setLoading(false);
    }
  }, [userDetails?.id]);

  const handleTrashCatItems = (itemIds: any[]) => {
    edit.update({ order_items: itemIds });
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
      summaryHeading: t('PICKUP.pickUp'),
      content: <PickupPlace />,
      displayIcon: SelectVehicleIcon
    },
    {
      summaryHeading: t('orderConfirmation'),
      content: (
        <OrderConfirmation
          edit={edit}
          handleButtonClick={handleCreateCustomerOrder}
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
  if (loading) {
    return <Loader />;
  } else {
    return (
      <Grid>
        <AccordionComponent
          expandIcon={false}
          accordionDetailPadding={theme.spacing(0, 6.5, 4.5, 6.5)}
          accordionPadding={theme.spacing(2.25, 6.5, 1, 6.5)}
          displayContent={bookYourPickupAccordionContent}
          summaryPadding={theme.spacing(3.5, 6.5)}
          summaryMargin={theme.spacing(2.5, 0)}
          expandMoreIcon={<ExpandMoreIcon />}
        />
      </Grid>
    );
  }
}
export default BookMyPickup;
