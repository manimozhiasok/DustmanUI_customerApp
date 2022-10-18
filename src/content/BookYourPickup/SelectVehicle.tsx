import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core';
import SelectVehicleType from 'src/components/SelectVehicleType';
import { API_SERVICES } from 'src/Services';

const useStyles = makeStyles<Theme>((theme: Theme) => createStyles({}));

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
  const handleClick = (vehicleId: number) => {
    edit.update({
      customer_order_details: {
        ...edit.edits.customer_order_details,
        vehicle_id: vehicleId
      }
    });
  };

  return (
    <>
      <SelectVehicleType dataContent={dataContent} onClick={handleClick} />
    </>
  );
}

export default SelectVehicle;
