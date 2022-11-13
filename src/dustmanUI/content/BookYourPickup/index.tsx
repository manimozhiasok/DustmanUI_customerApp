import React, { useCallback, useEffect, useState } from 'react';
import { Theme, useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import {
  ChooseCategoryComponent,
  Loader,
  OrderConfirmationComp,
  TrashDetailsComponent,
  UHAccordionComp,
  UHPickYourAddressComp,
  UHSelectYourPickUpComp
} from 'src/components';
import { Grid } from '@material-ui/core';
import { ChooseCategoryIcon, Plus, VectorIcon } from 'src/Assets/Images';
import { TrashDetailsIcon } from 'src/Assets/Images';
import { SelectVehicleIcon } from 'src/Assets/Images';
import { ScheduleYourPickupIcon } from 'src/Assets/Images';
import { PickupAddressIcon } from 'src/Assets/Images';
import { OrderConfirmationIcon } from 'src/Assets/Images';
import { OrderSuccessIcon } from 'src/Assets/Images';
import SelectVehicle from './SelectVehicle';
import { useEdit } from 'src/hooks/useEdit';
import { API_SERVICES } from 'src/dustmanUI/Services';
import {
  HTTP_STATUSES,
  timeSlotDetails,
  TRASH_CATEGORY_ID
} from 'src/Config/constant';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import useUserInfo from 'src/hooks/useUserInfo';
import { AddressData } from 'src/dustmanUI/Services/customerAddressService';
import { getDateFormat } from 'src/Utils';

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
  const uploadedImages = edit.getValue('order_images');

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
        await API_SERVICES.generalService.getAllTrashCategory(
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

  const onUploadFiles = async (event: any) => {
    let formData = new FormData();
    let selectedImages = event.target.files;
    for (let key in selectedImages) {
      formData.append('file', selectedImages[key]);
    }
    const uploadImageRes: any =
      await API_SERVICES.imageUploadService.uploadImage(formData);
    if (uploadImageRes?.status < HTTP_STATUSES.BAD_REQUEST) {
      if (uploadImageRes?.data?.images.length) {
        let imageData = [];
        uploadImageRes?.data?.images.map((item) => {
          imageData.push({ image_url: item.Location });
        });
        if (imageData?.length) {
          edit.update({
            order_images: [...uploadedImages, ...imageData]
          });
        }
      }
    }
  };

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
  const getTrashValue = () => {
    const data =
      edit.getValue('order_items').length &&
      edit.getValue('order_items').map((element) => {
        return (
          trashData.length &&
          trashData.filter((list: { id: any }) => list.id === element)[0].name
        );
      });
    return data.length ? data.join(', ') : '';
  };

  const getAddressData =
    (edit.getValue('order_address_id') &&
      userAddressDetails?.length &&
      userAddressDetails.filter(
        (item) => item.id === edit.getValue('order_address_id')
      )) ||
    [];

  const getSlotValues = () => {
    if (
      edit.getValue('customer_order_details')?.pickup_time &&
      edit.getValue('customer_order_details')?.slot
    ) {
      let data = `${
        getDateFormat(edit.getValue('customer_order_details').pickup_time)
          .getDay
      }, ${
        getDateFormat(edit.getValue('customer_order_details').pickup_time)
          .getDate
      } ${
        getDateFormat(edit.getValue('customer_order_details').pickup_time)
          .getMonth
      } ${
        timeSlotDetails.find(
          (item) => item.value === edit.getValue('customer_order_details')?.slot
        ).time
      }`;
      return data;
    }
  };

  const rightContent = [
    {
      content: t('PICKUP.slot'),
      value: getSlotValues()
    },
    {
      content: t('PICKUP.userName'),
      value: userDetails?.first_name
    },
    { content: t('category'), value: getTrashValue() },

    {
      content: t('address'),
      value: getAddressData[0]?.address ?? ''
    },
    {
      content: t('PICKUP.mobile'),
      value: getAddressData[0]?.mobile_number ?? ''
    }
  ];

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
        <TrashDetailsComponent
          edit={edit}
          trashData={trashData}
          onUploadFiles={onUploadFiles}
          uploadedImages={uploadedImages}
        />
      ),
      tileIcon: SelectVehicleIcon
    },
    {
      id: 3,
      title: t('selectVehicle'),
      accContentDetail: () => <SelectVehicle edit={edit} />,
      tileIcon: TrashDetailsIcon
    },
    {
      id: 4,
      title: t('scheduleYourPickup'),
      accContentDetail: () => (
        <UHSelectYourPickUpComp
          updateSelectedDate={updateSelectedDate}
          activeButtonColor={theme.Colors.secondary}
        />
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
          imageIcon={Plus}
        />
      ),
      tileIcon: PickupAddressIcon
    },
    {
      id: 6,
      title: t('orderConfirmation'),
      accContentDetail: () => (
        <OrderConfirmationComp
          handleButtonClick={handleCreateCustomerOrder}
          contentDetails={rightContent}
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
