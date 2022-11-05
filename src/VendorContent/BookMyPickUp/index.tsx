import React, { useCallback, useEffect, useState } from 'react';
import { Theme, useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import {
  ChooseCategoryComponent,
  Loader,
  UHAccordionComp
} from 'src/components';
import { Grid } from '@material-ui/core';
import { ChooseCategoryIcon, VectorIcon } from 'src/Assets/Images';
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
import OrderSuccess from './OrderSuccess';
import { useEdit } from 'src/hooks/useEdit';
import { API_SERVICES } from 'src/Services';
import {
  HTTP_STATUSES,
  TRASH_CATEGORY_ID,
  USER_TYPE_ID
} from 'src/Config/constant';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import PickupPlace from './PickupPlace';
import useVendorInfo from 'src/hooks/useVendorInfo';
import PickupOrderConfirmation from './PickupOrderConfirmation';

const useStyles = makeStyles((theme: Theme) => ({
  accordionStyle: {
    margin: theme.spacing(2.5, 0)
  },
  accordionSummaryStyle: {
    padding: theme.spacing(4, 4.5, 4, 6.5)
  },
  accordionDetailStyle: {
    padding: theme.spacing(0, 6.5, 4.5, 6.5)
  }
}));

export const initialValues = {
  quantity_kg: '',
  description: '',
  order_items: [],
  user_type_id: USER_TYPE_ID.vendorPickup,
  order_images: [],
  order_address_id: '',
  vendor_order_pickup_details: {
    vehicle_id: 0,
    pickup_time: '',
    slot: '',
    from_place: '',
    to_place: '',
    total_distance: 0
  }
};

function BookMyPickup() {
  const classes = useStyles();
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [trashData, setTrashData] = useState([]);
  const edit = useEdit(initialValues);
  const { t } = useTranslation();
  const { vendorDetails } = useVendorInfo();

  // const pickAddressFields = [
  //   'address_line1',
  //   'address_line2',
  //   'address_line3',
  //   'state',
  //   'city',
  //   'pincode',
  //   'mobile_number'
  // ];

  const handleCreateVendorOrder = async () => {
    try {
      // if (!edit.allFilled(...pickAddressFields)) {
      //   return toast.error('Please Fill all the pickup address details');
      // }
      let orderData = { ...initialValues, ...edit.edits };
      const createVendorRes: any =
        await API_SERVICES.vendorPickupDropService.createPickup(
          vendorDetails?.vendor_id,
          {
            data: orderData,
            successMessage: 'Vendor order created successfully!',
            failureMessage: 'Failed to create Vendor order '
          }
        );
      if (createVendorRes?.status < HTTP_STATUSES.BAD_REQUEST) {
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
  }, [vendorDetails?.id]);

  const handleTrashCatItems = (itemIds: any[]) => {
    edit.update({ order_items: itemIds });
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const bookYourPickupAccordionContent = [
    {
      id: 1,
      title: t('chooseCategory'),
      accContentDetail: () => (
        <ChooseCategoryComponent
          data={trashData}
          InitialItemVal={edit.getValue('order_items')}
          handleChangeItem={handleTrashCatItems}
          activeBorderColor={theme.Colors.orangePrimary}
          checkBoxColor={theme.Colors.orangePrimary}
        />
      ),
      tileIcon: ChooseCategoryIcon
    },
    {
      id: 2,
      title: t('trashDetails'),
      accContentDetail: () => (
        <TrashDetails edit={edit} trashData={trashData} />
      ),
      tileIcon: TrashDetailsIcon
    },
    {
      id: 3,
      title: t('selectVehicle'),
      accContentDetail: () => <SelectVehicle edit={edit} />,
      tileIcon: SelectVehicleIcon
    },
    {
      id: 4,
      title: t('scheduleYourPickup'),
      accContentDetail: () => <ScheduleYourPickup edit={edit} />,
      tileIcon: ScheduleYourPickupIcon
    },
    {
      id: 5,
      title: t('pickupAddress'),
      accContentDetail: () => <PickupAddress />,
      tileIcon: PickupAddressIcon
    },
    {
      id: 6,
      title: t('PICKUP.pickUp'),
      accContentDetail: () => <PickupPlace />,
      tileIcon: SelectVehicleIcon
    },
    {
      id: 7,
      title: t('pickupOrderConfirmation'),
      accContentDetail: () => (
        <PickupOrderConfirmation
          edit={edit}
          handleButtonClick={handleCreateVendorOrder}
          trashData={trashData}
        />
      ),
      tileIcon: OrderConfirmationIcon
    }
    // {
    //   id: 8,
    //   title: t('orderSuccess'),
    //   accContentDetail: () => <OrderSuccess />,
    //   tileIcon: OrderSuccessIcon
    // }
  ];

  const renderExpandIcons = (isActiveAccordion: boolean) => {
    if (isActiveAccordion) {
      return null;
    } else {
      return <VectorIcon />;
    }
  };

  if (loading) {
    return <Loader />;
  } else {
    return (
      <Grid>
        <UHAccordionComp
          config={bookYourPickupAccordionContent}
          isDashedLine={true}
          accordionOuterContainerClassName={classes.accordionStyle}
          isLeftTileIcon={true}
          accordionSummaryClassName={classes.accordionSummaryStyle}
          accordionDetailClassName={classes.accordionDetailStyle}
          renderExpandIcons={renderExpandIcons}
        />
      </Grid>
    );
  }
}
export default BookMyPickup;
