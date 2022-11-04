import { makeStyles, Theme, useTheme } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import PickUpAddressComponent from './PickUpAddressComponent';
import { bike } from 'src/Assets';
import { API_SERVICES } from 'src/Services';
import {
  HTTP_STATUSES,
  TRASH_CATEGORY_ID,
  USER_TYPE_ID
} from 'src/Config/constant';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useVendorInfo from 'src/hooks/useVendorInfo';

const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    paddingBottom: theme.spacing(5)
  }
}));
// const data = [
//   {
//     id: '1',
//     city: 'Ambattur Periya podhur',

//     address:
//       'New No: 42, 4th cross street, Ram Nagar, Velachery, Chennai 600042. '
//   },
//   {
//     id: '2',
//     city: ' Chennai',

//     address:
//       'New No: 42, 4th cross street, Ram Nagar, Velachery, Chennai 600042. '
//   }
// ];

function PickupAddress() {
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { vendorDetails } = useVendorInfo();

  const fetchData = async () => {
    try {
      const response: any =
        await API_SERVICES.vendorPickupDropService.getAllPickupAddress(
          vendorDetails?.vendor_id
        );

      if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
        if (response?.data?.message) {
          setData(response.data.message);
        }
      }
    } catch (err) {
      toast.error(err?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <PickUpAddressComponent data={data} />
    </>
  );
}

export default PickupAddress;
