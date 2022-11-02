import React, { useState } from 'react';
import { HTTP_STATUSES } from 'src/Config/constant';
import { API_SERVICES } from 'src/Services';

export type UserDetails = {
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
  first_name: string;
  last_name: string;
  email: string;
  user_type_id: number;
  image_url: string;
  customer_id: number;
  phoneNumber: string;
};

export type UserInfo = {
  userDetails: UserDetails;
  updateUserInfo: (id: number) => void;
  userAddressDetails: any[];
};

const INITIAL_STATE: UserInfo = {
  userDetails: {
    id: 0,
    vendor_id: 4,
    first_name: '',
    last_name: '',
    email: '',
    user_type_id: 0,
    language_id: 0,
    name: '',
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
    phoneNumber: '',
    image_url: '',
    customer_id: 0
  },
  updateUserInfo: () => undefined,
  userAddressDetails: []
};

export const UserInfoContext = React.createContext({
  ...INITIAL_STATE
});

type Props = {
  children: any;
};

export const UserInfoProvider = ({ children }: Props) => {
  const [userDetails, setUserDetails] = useState<UserDetails>(
    INITIAL_STATE.userDetails
  );
  const [userAddresses, setUserAddresses] = useState<any>(
    INITIAL_STATE.userAddressDetails
  );

  const updateUserDetails = async (id: number) => {
    const response: any =
      await API_SERVICES.customerProfileService.getProfileByCustomerId(id);
    if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
      if (response?.data?.customer_profile) {
        setUserDetails((prev: UserDetails) => {
          return { ...prev, ...response?.data?.customer_profile };
        });
      }
      if (response?.data?.address) {
        setUserAddresses(response?.data?.address);
      }
    }
  };

  const contextValue = React.useMemo(() => {
    return {
      userDetails: userDetails,
      updateUserInfo: updateUserDetails,
      userAddressDetails: userAddresses
    };
  }, [userDetails, updateUserDetails]);

  return (
    <UserInfoContext.Provider value={contextValue}>
      {children}
    </UserInfoContext.Provider>
  );
};
