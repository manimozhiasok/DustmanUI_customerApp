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

export const initialValues = {
  quantity_kg: 0,
  order_items: [1, 2],
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
    vehicle_id: 3,
    pickup_time: '',
    slot: ''
  }
};

function BookYourPickup() {
  const classes = useStyles();
  const theme = useTheme();
  const [selectedName, setSelectedName] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const edit = useEdit(initialValues);
  const { t } = useTranslation();

  console.log('edit.edits index', edit.edits);

  const handleCreateData = async () => {
    try {
      let userData = { ...initialValues, ...edit.edits };
      const createUserRes: any =
        await API_SERVICES.customerCreateService.create({
          data: userData,
          successMessage: 'customer created successfully!'
          //failureMessage: 'customer cannot create'
        });
      console.log(
        'createUserRes..........................................',
        createUserRes
      );
      // if (createUserRes?.status < HTTP_STATUSES.BAD_REQUEST) {
      //   updateData();
      //   onClose();
      // }
    } catch (err) {
      toast.error(err?.message);
    }
  };

  const fetchData = useCallback(async () => {
    try {
      //setLoading(true);
      const response: any =
        await API_SERVICES.customerCreateService.getAllTrashCategory(1, 1);
      if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
        if (response?.data) {
          console.log(response.data);
          console.log(response.data.categories);
          setData(response.data.categories);
        }
      }
    } catch (err) {
      toast.error(err?.message);
    } finally {
      //setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  const handleChange = async (e: { target: { id: any; value: any } }) => {
    let targetId = e.target.id;
    let itemId = selectedItemId.filter((id) => targetId !== id);
    if (itemId.length < selectedItemId.length) {
      setSelectedItemId(itemId);
    } else {
      //setSelectedItemId((selectedItemId) => [...selectedItemId, targetId]);
      setSelectedItemId([...selectedItemId, targetId]);
    }
    console.log('selectedItemId from handleChange', selectedItemId);

    const checkedValue = e.target.value;
    const items = selectedItems.filter(
      (selectedItem) => checkedValue !== selectedItem
    );
    if (items.length < selectedItems.length) {
      setSelectedItems(items);
    } else {
      //setSelectedItems([...selectedItems, checkedValue]);
      //selectedItems.push(checkedValue)
      let temp = selectedItems;
      temp.push(checkedValue);
      setSelectedItems(temp);
      console.log('selectedItems', selectedItems);
    }
    edit.update({ order_items: selectedItems });
  };

  const bookYourPickupAccordionContent = [
    {
      summaryHeading: t('chooseCategory'),
      content: (
        <ChooseCategory
          edit={edit}
          data={data}
          handleChange={handleChange}
          selectedItemId={selectedItemId}
        />
      ),
      displayIcon: ChooseCategoryIcon
    },
    {
      summaryHeading: t('trashDetails'),
      content: <TrashDetails edit={edit} />,
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
        <OrderConfirmation edit={edit} handleButtonClick={handleCreateData} />
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
