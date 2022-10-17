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
function SelectVehicle({ edit }) {
  const [dataContent, setDataContent] = useState([]);
  const fetchData = async () => {
    const response: any =
      await API_SERVICES.customerCreateService.getAllVehicle();
    console.log('response......', response.data.vehicles[0].id);
    setDataContent(response.data.vehicles);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleClick = (id, setActive, vehicleName) => {
    setActive(id);
    console.log(id);
    edit.update({
      customer_order_details: {
        vehicle_id: id,
        ...edit.edits.customer_order_details
      }
    });
    //edit.update({ vehicle_name: vehicleName });
  };

  return (
    <>
      <SelectVehicleType dataContent={dataContent} onClick={handleClick} />
    </>
  );
}

export default SelectVehicle;
