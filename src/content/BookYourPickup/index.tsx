import React, { useCallback, useEffect, useState } from 'react';
import { Theme, useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import {
  ChooseCategoryComponent,
  Loader,
  UHAccordionComp,
  UHPickYourAddressComp,
  UHSelectYourPickUpComp
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
import OrderConfirmation from './OrderConfirmation';
import OrderSuccess from './OrderSuccess';
import { useEdit } from 'src/hooks/useEdit';
import { API_SERVICES } from 'src/Services';
import { HTTP_STATUSES, TRASH_CATEGORY_ID } from 'src/Config/constant';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import useUserInfo from 'src/hooks/useUserInfo';
import { AddressData } from 'src/Services/customerAddressService';

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

function BookYourPickup() {
  const classes = useStyles();
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [trashData, setTrashData] = useState([]);
  const edit = useEdit(initialValues);
  const { t } = useTranslation();
  const { userDetails, userAddressDetails, updateUserInfo } = useUserInfo();

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
      const createUserRes: any = await API_SERVICES.customerOrderService.create(
        userDetails?.customer_id,
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
      if (userDetails?.user_type_id === 0) {
        return;
      }
      const response: any =
        await API_SERVICES.customerOrderService.getAllTrashCategory(
          TRASH_CATEGORY_ID.customerTrash,
          userDetails?.user_type_id
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
  }, [userDetails?.user_type_id]);

  const handleTrashCatItems = (itemIds: any[]) => {
    edit.update({ order_items: itemIds });
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const updateSelectedDate = (dateString: string, slot: string) => {
    edit.update({
      customer_order_details: {
        ...edit.edits.customer_order_details,
        pickup_time: dateString,
        slot: slot
      }
    });
  };

  const handleChangeAddress = (selectedAddressId: number) => {
    edit.update({
      order_address_id: selectedAddressId
    });
  };

  const handleSaveButtonClick = async (
    addressData: AddressData,
    modalClose: () => void
  ) => {
    const response: any = await API_SERVICES.customerAddressService.create(
      userDetails?.customer_id,
      {
        data: addressData,
        successMessage: 'New address added successfully',
        failureMessage: 'Failed to add new address'
      }
    );
    if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
      if (response?.data?.message) {
        let id = response?.data?.message?.customer_id;
        updateUserInfo(id);
        modalClose();
      }
    }
  };

  const bookYourPickupAccordionContent = [
    {
      id: 1,
      title: t('chooseCategory'),
      accContentDetail: () => (
        <ChooseCategoryComponent
          data={trashData}
          InitialItemVal={edit.getValue('order_items')}
          handleChangeItem={handleTrashCatItems}
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
      accContentDetail: () => (
        <UHSelectYourPickUpComp updateSelectedDate={updateSelectedDate} />
      ),
      tileIcon: ScheduleYourPickupIcon
    },
    {
      id: 5,
      title: t('pickupAddress'),
      accContentDetail: () => (
        <UHPickYourAddressComp
          handleSaveButtonClick={handleSaveButtonClick}
          addressData={userAddressDetails}
          handleChangeAddress={handleChangeAddress}
        />
      ),
      tileIcon: PickupAddressIcon
    },
    {
      id: 6,
      title: t('orderConfirmation'),
      accContentDetail: () => (
        <OrderConfirmation
          edit={edit}
          handleButtonClick={handleCreateCustomerOrder}
          trashData={trashData}
        />
      ),
      tileIcon: OrderConfirmationIcon
    }
    // {
    //   id: 7,
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
export default BookYourPickup;
