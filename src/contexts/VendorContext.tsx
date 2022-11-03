import React, { useState } from 'react';
import { HTTP_STATUSES } from 'src/Config/constant';
import { API_SERVICES } from 'src/Services';

export type VendorDetails = {
  id: number;
  vendor_id: number;
  language_id: number;
  name: string;
  gst: string;
  full_address: string;
  contact_name: string;
  mobile_number: string;
  landline_number: string;
  email_id: string;
  website: string;
  established_year: string;
  vehicle_owned: string;
  status_id: number;
  location: string;
  pincode: string;
  image_url: string;
};

export type VendorInfo = {
  vendorDetails: VendorDetails;
  updateVendorInfo: (id: number) => void;
  vendorAddressDetails: any[];
};

const INITIAL_STATE: VendorInfo = {
  vendorDetails: {
    id: 0,
    name: '',
    language_id: 0,
    gst: '',
    full_address: '',
    contact_name: '',
    mobile_number: '',
    landline_number: '',
    email_id: '',
    website: '',
    established_year: '',
    vehicle_owned: '',
    status_id: 0,
    location: '',
    pincode: '',
    image_url: '',
    vendor_id: 0
  },
  updateVendorInfo: () => undefined,
  vendorAddressDetails: []
};

export const VendorInfoContext = React.createContext({
  ...INITIAL_STATE
});

type Props = {
  children: any;
};

export const VendorInfoProvider = ({ children }: Props) => {
  const [vendorDetails, setVendorDetails] = useState<VendorDetails>(
    INITIAL_STATE.vendorDetails
  );
  const [vendorAddresses, setVendorAddresses] = useState<any>(
    INITIAL_STATE.vendorAddressDetails
  );

  const updateVendorDetails = async (id: number) => {
    const response: any =
      await API_SERVICES.vendorProfileService.getProfileByVendorId(id);
    if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
      if (response?.data?.vendorProfile) {
        setVendorDetails((prev: VendorDetails) => {
          return { ...prev, ...response.data.vendorProfile };
        });
      }
      if (response?.data?.address) {
        setVendorAddresses(response.data.address);
      }
    }
  };

  const contextValue = React.useMemo(() => {
    return {
      vendorDetails: vendorDetails,
      updateVendorInfo: updateVendorDetails,
      vendorAddressDetails: vendorAddresses
    };
  }, [vendorDetails, updateVendorDetails]);

  return (
    <VendorInfoContext.Provider value={contextValue}>
      {children}
    </VendorInfoContext.Provider>
  );
};
