import React, { useCallback, useEffect, useState } from 'react';
import { Theme, useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import {
  ChooseCategoryComponent,
  Loader,
  TrashDetailsComponent,
  UHAccordionComp,
  UHSelectYourPickUpComp
} from 'src/components';
import { Grid } from '@material-ui/core';
import { ChooseCategoryIcon, VectorIcon } from 'src/Assets/Images';
import { TrashDetailsIcon } from 'src/Assets/Images';
import { ScheduleYourPickupIcon } from 'src/Assets/Images';
import { PickupAddressIcon } from 'src/Assets/Images';
import { OrderConfirmationIcon } from 'src/Assets/Images';
import { OrderSuccessIcon } from 'src/Assets/Images';
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
import useVendorInfo from 'src/hooks/useVendorInfo';
import ChooseDropLocation from './ChooseDropLocation';
import DropOrderConfirmation from './DropOrderConfirmation';

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
  user_type_id: 5,
  vendor_order_drop_details: {
    dustman_location_id: '',
    pickup_time: '',
    slot: ''
  }
};

function BookMyDrop() {
  const classes = useStyles();
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [trashData, setTrashData] = useState([]);
  const [location, setLocation] = useState([]);
  const edit = useEdit(initialValues);
  const { t } = useTranslation();
  const { vendorDetails } = useVendorInfo();
  const uploadedImages = edit.getValue('order_images');

  const handleVendorDropOrder = async () => {
    try {
      let orderData = { ...initialValues, ...edit.edits };
      const recponse: any =
        await API_SERVICES.vendorPickupDropService.createVendorOrderDrop(
          vendorDetails?.vendor_id,
          {
            data: orderData,
            successMessage: 'Drop order completed successfully!',
            failureMessage: 'Failed to do drop order '
          }
        );
      if (recponse?.status < HTTP_STATUSES.BAD_REQUEST) {
        edit.reset();
      }
    } catch (err) {
      toast.error(err?.message);
    }
  };

  const fetchData = useCallback(async () => {
    try {
      const response: any = await Promise.all([
        API_SERVICES.vendorPickupDropService.getAllTrashCategory(
          TRASH_CATEGORY_ID.vendorDropTrash,
          USER_TYPE_ID.vendorDrop
        ),
        API_SERVICES.vendorPickupDropService.getDustmanLocation()
      ]);
      if (response[0]?.status < HTTP_STATUSES.BAD_REQUEST) {
        if (response[0]?.data?.categories) {
          setTrashData(response[0].data.categories);
        }
      }
      if (response[1]?.status < HTTP_STATUSES.BAD_REQUEST) {
        if (response[1]?.data?.Location) {
          setLocation(response[1].data.Location);
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

  const handleChangeAddress = (selectedAddressId: number) => {
    edit.update({
      vendor_order_drop_details: {
        ...edit.edits.vendor_order_drop_details,
        dustman_location_id: selectedAddressId
      }
    });
  };

  const updateSelectedDate = (dateString: string, slot: string) => {
    edit.update({
      vendor_order_drop_details: {
        ...edit.edits.vendor_order_drop_details,
        pickup_time: dateString,
        slot: slot
      }
    });
  };

  const bookMyDropAccordionContent = [
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
      tileIcon: TrashDetailsIcon
    },
    {
      id: 3,
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
      id: 4,
      title: t('chooseDropLocation'),
      accContentDetail: () => (
        <ChooseDropLocation
          data={location}
          edit={edit}
          handleChangeAddress={handleChangeAddress}
        />
      ),
      tileIcon: PickupAddressIcon
    },
    {
      id: 6,
      title: t('dropOrderConfirmation'),
      accContentDetail: () => (
        <DropOrderConfirmation
          edit={edit}
          handleButtonClick={handleVendorDropOrder}
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
          config={bookMyDropAccordionContent}
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
export default BookMyDrop;
