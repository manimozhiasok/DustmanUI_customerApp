import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core';
import { bike } from 'src/Assets';
import { vehicleImage } from 'src/Assets';
import SelectVehicleType from 'src/components/SelectVehicleType';
import { API_SERVICES } from 'src/Services';

const useStyles = makeStyles<Theme>((theme: Theme) => createStyles({}));
// const dataContent = [
//   {
//     heading: 'Two Wheeler',
//     subHeading: 'Vehicle Type',
//     image: bike,
//     subText: '* Kindly arrange parking'
//   },
//   {
//     heading: 'Three Wheeler',
//     subHeading: 'Tri Cycle',
//     image: vehicleImage,
//     subText: '* Kindly arrange parking'
//   },
//   {
//     heading: 'Four Wheeler',
//     subHeading: 'mini truck',
//     image: vehicleImage,
//     subText: '* Kindly arrange parking'
//   },
//   {
//     heading: 'Four Wheeler',
//     subHeading: 'Tempo',
//     image: vehicleImage,
//     subText: '* Kindly arrange parking'
//   },
//   {
//     heading: 'Four Wheeler',
//     subHeading: 'Lorry',
//     image: vehicleImage,
//     subText: '* Kindly arrange parking'
//   }
// ];
function SelectVehicle() {
  const classes = useStyles();
  const theme = useTheme();
  const [dataContent, setDataContent] = useState([]);
  const handleClick = () => {
    console.log('clicked item');
  };
  const fetchData = async () => {
    const response: any =
      await API_SERVICES.customerCreateService.getAllVehicle();
    console.log('response......', response.data.vehicles);
    setDataContent(response.data.vehicles);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <SelectVehicleType dataContent={dataContent} onClick={handleClick} />
    </>
  );
}

export default SelectVehicle;
