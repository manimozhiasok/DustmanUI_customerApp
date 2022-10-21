import { apiOptions } from 'src/Utils/apiOptions';
import { apiRequest } from 'src/Utils/apiRequest';
import { Config } from 'src/Config';

export const generalService = {
  getAllVehicles: async () => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/getAllVehicles`,
      method: 'get'
    });
    return apiRequest(options);
  },

  getDustmanLocation: async () => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/getDustmanLocation`,
      method: 'get'
    });
    return apiRequest(options);
  },

  getAllUserTypes: async () => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/getAllUserType`,
      method: 'get'
    });
    return apiRequest(options);
  }
};
