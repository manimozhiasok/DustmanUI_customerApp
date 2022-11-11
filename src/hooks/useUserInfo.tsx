import React from 'react';
import { UserInfoContext } from 'src/contexts/UserContext';

const useUserInfo = () => {
  const userData = React.useContext(UserInfoContext);
  return userData;
};

export default useUserInfo;
