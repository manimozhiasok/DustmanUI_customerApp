import React, { useState } from 'react';

export type UserDetails = {
  id: number;
  name: string;
  user_name: string;
  password: string;
  position: string;
  created_at: string;
  updated_at: string;
};

export type UserInfo = {
  userDetails: UserDetails;
  updateUserInfo: React.Dispatch<React.SetStateAction<UserDetails>>;
};

const INITIAL_STATE: UserInfo = {
  userDetails: {
    id: 0,
    name: '',
    user_name: '',
    password: '',
    position: '',
    created_at: '',
    updated_at: ''
  },
  updateUserInfo: () => undefined
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

  const contextValue = React.useMemo(() => {
    return {
      userDetails: userDetails,
      updateUserInfo: setUserDetails
    };
  }, [userDetails]);
  return (
    <UserInfoContext.Provider value={contextValue}>
      {children}
    </UserInfoContext.Provider>
  );
};
