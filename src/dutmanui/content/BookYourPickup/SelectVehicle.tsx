import React, { useEffect, useState } from 'react';
import { API_SERVICES } from 'src/dutmanui/Services';
import { HTTP_STATUSES } from 'src/Config/constant';
import { SelectVehicleType } from 'src/components';

function SelectVehicle({ edit }) {
  const [dataContent, setDataContent] = useState([]);

  const fetchData = async () => {
    const response: any = await API_SERVICES.generalService.getAllVehicles();
    if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
      if (response?.data?.vehicles) {
        setDataContent(response.data.vehicles);
      }
    }
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
    <SelectVehicleType
      dataContent={dataContent}
      selectedVal={edit.getValue('customer_order_details').vehicle_id}
      onClick={handleClick}
    />
  );
}

export default SelectVehicle;
