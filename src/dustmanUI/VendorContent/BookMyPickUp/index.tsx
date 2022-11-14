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
import { ChooseCategoryIcon, PlusWhite, VectorIcon } from 'src/Assets/Images';
import { TrashDetailsIcon } from 'src/Assets/Images';
import { SelectVehicleIcon } from 'src/Assets/Images';
import { ScheduleYourPickupIcon } from 'src/Assets/Images';
import { PickupAddressIcon } from 'src/Assets/Images';
import { OrderConfirmationIcon } from 'src/Assets/Images';
import { OrderSuccessIcon } from 'src/Assets/Images';
import { useEdit } from 'src/hooks/useEdit';
import { API_SERVICES } from 'src/dustmanUI/Services';
import {
  HTTP_STATUSES,
  timeSlotDetails,
  TRASH_CATEGORY_ID,
  USER_TYPE_ID
} from 'src/Config/constant';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import PickupPlace from './PickupPlace';
import useVendorInfo from 'src/hooks/useVendorInfo';
import { VendorAddressData } from 'src/dustmanUI/Services/vendorAddressService';
import { getDateFormat } from 'src/Utils';
import VendorVehicleSelect from './VendorVehicleSelect';
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
  const { vendorDetails, updateVendorInfo, vendorAddressDetails } =
    useVendorInfo();
  const uploadedImages = edit.getValue('order_images');

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
        await API_SERVICES.vendorPickupDropService.createVendorOrder(
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
        await API_SERVICES.generalService.getAllTrashCategory(
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
      vendor_order_pickup_details: {
        ...edit.edits.vendor_order_pickup_details,
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
    addressData: VendorAddressData,
    modalClose: () => void
  ) => {
    const response: any = await API_SERVICES.vendorAddressService.createAddress(
      vendorDetails?.vendor_id,
      {
        data: addressData,
        successMessage: 'New address added successfully',
        failureMessage: 'Failed to add new address'
      }
    );

    if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
      if (response?.data?.address) {
        let id = response?.data?.address?.vendor_id;
        updateVendorInfo(id);
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
      vendorAddressDetails?.length &&
      vendorAddressDetails.filter(
        (item) => item.id === edit.getValue('order_address_id')
      )) ||
    [];

  const getSlotValues = () => {
    if (
      edit.getValue('vendor_order_pickup_details')?.pickup_time &&
      edit.getValue('vendor_order_pickup_details')?.slot
    ) {
      let data = `${
        getDateFormat(edit.getValue('vendor_order_pickup_details').pickup_time)
          .getDay
      }, ${
        getDateFormat(edit.getValue('vendor_order_pickup_details').pickup_time)
          .getDate
      } ${
        getDateFormat(edit.getValue('vendor_order_pickup_details').pickup_time)
          .getMonth
      } ${
        timeSlotDetails.find(
          (item) =>
            item.value === edit.getValue('vendor_order_pickup_details')?.slot
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
      value: vendorDetails?.contact_name
    },
    { content: t('category'), value: getTrashValue() },

    {
      content: t('address'),
      value:
        getAddressData[0]?.address_line1 +
        ',' +
        getAddressData[0]?.address_line2 +
        ',' +
        getAddressData[0]?.address_line3 +
        ',' +
        getAddressData[0]?.city +
        ',' +
        getAddressData[0]?.state +
        ',' +
        getAddressData[0]?.pincode
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
        <TrashDetailsComponent
          edit={edit}
          trashData={trashData}
          uploadedImages={uploadedImages}
          onUploadFiles={onUploadFiles}
        />
      ),
      tileIcon: SelectVehicleIcon
    },
    {
      id: 3,
      title: t('selectVehicle'),
      accContentDetail: () => <VendorVehicleSelect edit={edit} />,
      tileIcon: SelectVehicleIcon
    },
    {
      id: 4,
      title: t('scheduleYourPickup'),
      accContentDetail: () => (
        <UHSelectYourPickUpComp
          updateSelectedDate={updateSelectedDate}
          activeTileColor={theme.Colors.orangePrimary}
          activeButtonColor={theme.Colors.orangePrimary}
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
          addressData={vendorAddressDetails}
          handleChangeAddress={handleChangeAddress}
          bgButtonClr={theme.Colors.orangePrimary}
          btnTextClr={theme.Colors.white}
          imageIcon={PlusWhite}
          radioColor={theme.Colors.orangePrimary}
        />
      ),
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
        <OrderConfirmationComp
          contentDetails={rightContent}
          handleButtonClick={handleCreateVendorOrder}
          bgBtnColor={theme.Colors.orangePrimary}
          checkedIcon
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
