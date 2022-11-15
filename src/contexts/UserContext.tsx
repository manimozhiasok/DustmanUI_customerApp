import React, { useState } from 'react';
import { HTTP_STATUSES } from 'src/Config/constant';
import { API_SERVICES } from 'src/dustmanUI/Services';

export type UserDetails = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  user_type_id: number;
  language_id: number;
  image_url: string;
  customer_id: number;
  mobile_number: string;
};

export type UserInfo = {
  userDetails: UserDetails;
  updateUserInfo: (id: number) => void;
  userAddressDetails: any[];
};

const INITIAL_STATE: UserInfo = {
  userDetails: {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    user_type_id: 0,
    language_id: 0,
    image_url: '',
    customer_id: 0,
    mobile_number: ''
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
  }, [userDetails, updateUserDetails, userAddresses]);

  return (
    <UserInfoContext.Provider value={contextValue}>
      {children}
    </UserInfoContext.Provider>
  );
};
