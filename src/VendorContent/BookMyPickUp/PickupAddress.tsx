import { makeStyles, Theme, useTheme } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import PickUpAddressComponent from 'src/components/PickUpAddressComponent';
import { bike } from 'src/Assets';

const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    paddingBottom: theme.spacing(5)
  }
}));
const data = [
  {
    id: '1',
    address: 'Ambattur Periya podhur',
    image: bike,
    description:
      'New No: 42, 4th cross street, Ram Nagar, Velachery, Chennai 600042. '
  },
  {
    id: '2',
    address: ' Chennai',
    image: bike,
    description:
      'New No: 42, 4th cross street, Ram Nagar, Velachery, Chennai 600042. '
  }
];
function PickupAddress({ edit }) {
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <>
      <PickUpAddressComponent data={data} />
    </>
  );
}

export default PickupAddress;
