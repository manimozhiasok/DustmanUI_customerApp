import { useEffect, useState } from 'react';
import SelectVehicleType from 'src/components/SelectVehicleType';
import { API_SERVICES } from 'src/dutmanui/Services';
import { HTTP_STATUSES } from 'src/Config/constant';

function VendorVehicleSelect({ edit }) {
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
      vendor_order_pickup_details: {
        ...edit.edits.vendor_order_pickup_details,
        vehicle_id: vehicleId
      }
    });
  };

  return (
    <SelectVehicleType
      dataContent={dataContent}
      selectedVal={edit.getValue('vendor_order_pickup_details').vehicle_id}
      onClick={handleClick}
    />
  );
}

export default VendorVehicleSelect;
