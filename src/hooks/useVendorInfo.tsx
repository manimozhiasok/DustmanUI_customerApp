import React from 'react';
import { VendorInfoContext } from 'src/dutmanui/contexts/VendorContext';

const useVendorInfo = () => {
  const vendorData = React.useContext(VendorInfoContext);
  return vendorData;
};

export default useVendorInfo;
